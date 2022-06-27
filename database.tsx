import Realm from 'realm';

const incomeSchema = {
    name: 'Income',
    primaryKey: '_id_income',
    properties: {
      _id_income: 'int',
      amount: 'int',
      date: 'string',
      category: 'string',
      comment: 'string?',
    }
  }

const expenseSchema = {
  name: 'Expense',
  primaryKey: '_id_expense',
  properties: {
    _id_expense: 'int',
    amount: 'int',
    recipient: 'string',
    date: 'string',
    category: 'string',
    comment: 'string?',
  }
}

/*
const userSchema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
        _id: 'number',
        incomes: '{ type: "list", objectType: "incomeSchema" }',
        expenses: '{ type: "list", objectType: "expenseSchema" }',
    }
}
*/


//Fonction Ajout de revenus à la base de données
function addIncomeData(values:any):void{
  
    const realm = new Realm({schema: [incomeSchema], schemaVersion: 3})

    realm.write(() => {
        realm.create('Income', {
            _id_income: parseInt('' + new Date().getTime() + Math.floor(Math.random()*1000)),
            amount: parseInt(values.amount.replace('.', '').replace(',', '').replace(' ', '')),
            date: values.date,
            category: values.category,
            comment: values.comment,
        })
    })

    console.warn(realm.objects<{_id_income:number}>('Income').sorted('_id_income', true))

    realm.close()

}

//Fonction Ajout de revenus à la base de données
function addExpenseData(values:any):void{
  
    const realm = new Realm({schema: [expenseSchema], schemaVersion: 3})

    realm.write(() => {
        realm.create('Expense', {
            _id_expense: parseInt('' + new Date().getTime() + Math.floor(Math.random()*1000)),
            amount: parseInt(values.amount.replace('.', '').replace(',', '').replace(' ', '')),
            recipient: values.recipient,
            date: values.date,
            category: values.category,
            comment: values.comment,
        })
    })

    console.warn(realm.objects('Expense'))

    realm.close()

}

//getAll
function getAllIncomes(){

    const realm = new Realm({schema: [incomeSchema], schemaVersion: 3})
    
    return realm.objects('Income').sorted('_id_income')

    realm.close()

}

function deletelastIncome(){
    const realm = new Realm({schema: [incomeSchema], schemaVersion: 3})

    let lastIncome =  realm.objects('Income').sorted('_id_income')[0]
    realm.write(() => {
        realm.delete(lastIncome)
    })
    realm.close()
}


export {addIncomeData, addExpenseData, getAllIncomes, deletelastIncome}



