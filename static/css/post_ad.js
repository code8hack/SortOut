 var app = new Vue({
            el: '#app',
            data:{
                newTask: '',
                lastId: 2,
                taskIdToEdit: 0,
                taskNameToEdit: '',
                tasks: [
                    {id:1, name:'Learn python', isCompleted:false},
                    {id:2, name:'Push repo', isCompleted:true}
                ]},
            methods:{
                isEntryValid(str){
                    // Regular expresion, this checks if the entry only contains white spaces.
                    // True if there is more than only spaces.
                    return (/\S/.test(str));
                },
                findTaskToEdit(clickedTaskId){
                    var taskToEdit = this.tasks.find(element => {
                        return element.id === clickedTaskId;
                    });
                    return taskToEdit;
                },
                resetEditedValues(){
                    this.taskIdToEdit=0;
                    this.taskNameToEdit = '';
                },
                addTask(){
                    if(this.isEntryValid(this.newTask)){
                        this.lastId+=1;
                        this.tasks.push({id:this.lastId, name:this.newTask, isCompleted:false});
                        this.newTask = '';
                        this.setChartData();
                    }
                },
                editTaskStatus(clickedTaskId){
                    var taskToEdit = this.findTaskToEdit(clickedTaskId);
                    taskToEdit.isCompleted = !taskToEdit.isCompleted;
                    this.setChartData();
                },
                removeTask(clickedTaskId){
                    var taskListToKeep = this.tasks.filter(element => {
                        return element.id != clickedTaskId;
                    });
                    this.tasks = taskListToKeep;
                    this.setChartData();
                },
                clearList(){
                    var tasksToKeep = this.tasks.filter(element => {
                        return element.isCompleted == false;
                    });
                    this.tasks = tasksToKeep;
                    this.setChartData();
                },
                selectTaskToEdit(clickedTaskId){
                    this.taskIdToEdit = clickedTaskId;
                    this.setChartData();
                },
                saveEditedTask(clickedTaskId){
                    var taskToEdit = this.findTaskToEdit(clickedTaskId);
                    if(this.isEntryValid(this.taskNameToEdit))
                        taskToEdit.name = this.taskNameToEdit;
                    this.resetEditedValues();
                }
            }
            // end of methods
        });
        // end of app script