const initialData = {
    tasks : {
        "task1": {id: "task1", content: "Faire du sport"},
        "task2": {id: "task2", content: "Faire une watchlist"},
        "task3": {id: "task3", content: "Charger mon pc"},
        "task4": {id: "task4", content: "Faire le repas"}
    },
    columns: {
        "column1" : { id: "column1", title: "ToDo", taskIds: ["task1","task2","task3","task4"]},

        "column2" : { id: "column2", title: "WIP", taskIds: []},
    
        "column3" : { id: "column3", title: "Done", taskIds: []}
    },

    columnOrder: ["column1", 'column2', 'column3']
}

export default initialData