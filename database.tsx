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

//Fonction Ajout de revenus à la base de données
function addIncomeData(values:any):void{
  
    const realm = new Realm({schema: [incomeSchema], schemaVersion: 2})
  
    function getNextIncomeId():number{
        let lastEntry = realm.objects<{_id_income:number}>('Income').sorted('_id_income', true)[0]
        return lastEntry !== undefined ? (lastEntry._id_income + 1) : 0
    }
    realm.write(() => {
        realm.create('Income', {
            _id_income: getNextIncomeId(),
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
  
    const realm = new Realm({schema: [expenseSchema], schemaVersion: 2})

    function getNextExpenseId():number{
        let lastEntry = realm.objects<{_id_expense:number}>('Expense').sorted('_id_expense', true)[0]
        return lastEntry !== undefined ? (lastEntry._id_expense + 1) : 0
    }
    realm.write(() => {
        realm.create('Expense', {
            _id_expense: getNextExpenseId(),
            amount: parseInt(values.amount.replace('.', '').replace(',', '').replace(' ', '')),
            recipient: values.recipient,
            date: values.date,
            category: values.category,
            comment: values.comment,
        })
    })

    console.warn(realm.objects('Expense').sorted('_id_expense', true))

    realm.close()

}


function getAll(){

    const realm = new Realm({schema: [expenseSchema], schemaVersion: 2})
    
    console.warn(realm.objects('Expense'))

    realm.close()

}


export {addIncomeData, addExpenseData, getAll}



