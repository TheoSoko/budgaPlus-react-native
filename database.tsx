import Realm from 'realm';

const incomeSchema = {
    name: 'Income',
    primaryKey: '_id',
    properties: {
      _id: 'int',
      amount: 'int',
      date: 'string',
      category: 'string',
      comment: 'string?',
    }
  }

const expenseSchema = {
  name: 'Expense',
  primaryKey: '_id',
  properties: {
    _id: 'int',
    amount: 'int',
    recipient: 'string',
    date: 'string',
    category: 'string',
    comment: 'string?',
  }
}

//Fonction Ajout de revenus à la base de données
function addIncomeData(values:any):void{
  
    const realm = new Realm({schema: [incomeSchema], schemaVersion: 1})
  
    function getNextIncomeId():number{
        let lastEntry = realm.objects<{_id:number}>('Income').sorted('_id', true)[0]
        return lastEntry !== undefined ? (lastEntry._id + 1) : 0
    }
    realm.write(() => {
        realm.create('Income', {
            _id: getNextIncomeId(),
            amount: parseInt(values.amount.replace('.', '').replace(',', '').replace(' ', '')),
            date: values.date,
            category: values.category,
            comment: values.comment,
        })
    })
  
    console.warn(realm.objects<{_id:number}>('Income').sorted('_id', true))
    
    realm.close()

}

//Fonction Ajout de revenus à la base de données
function addExpenseData(values:any):void{
  
    const realm = new Realm({schema: [expenseSchema], schemaVersion: 1})

    function getNextExpenseId():number{
        let lastEntry = realm.objects<{_id:number}>('Expense').sorted('_id', true)[0]
        return lastEntry !== undefined ? (lastEntry._id + 1) : 0
    }
    realm.write(() => {
        realm.create('Expense', {
            _id: getNextExpenseId(),
            amount: parseInt(values.amount.replace('.', '').replace(',', '').replace(' ', '')),
            recipient: values.recipient,
            date: values.date,
            category: values.category,
            comment: values.comment,
        })
    })

    console.warn(realm.objects('Expense').sorted('_id', true))
    
    realm.close()

}

/*
let getAllIncomes = () => {
    return realm.objects('Income');
}
*/

export {addIncomeData, addExpenseData}



