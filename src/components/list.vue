<template>
    <div class="list">
        <input class="inputArea" @keyup.enter="addTodo()" type="text" placeholder="Add item to list ..." v-model="todo.title">
        <!-- <input type="checkbox" v-model="todo.completed"> -->
        <button class="addBtn" @click="addTodo()">Add</button>

        <ul v-for="todo in todos" v-bind:key="todo.index">
            <label class="checkbox-label">
                <input type="checkbox" v-model="todo.completed">
                <span class="checkbox-custom"></span>
            </label>
            <li class="listItem">{{ todo.title }} <!-- | Completed: {{ todo.completed }} | --> </li>
            <button class="removeBtn" @click="removeTodo(todo)">X</button>
        </ul>
    </div>
</template>

<style>
.list {
  margin: 5% 5%;
}

.inputArea {
    width: 70%;
    border: 2px solid black;
    padding: 1%;
    font-size: 1.3rem;
}

.addBtn {
    width: 30%;
    border: 2px solid #232422;
    background-color: #bbb;
    padding: 1%;
    font-size: 1.3rem;
    cursor: pointer;
}

.addBtn:hover {
  background-color: #aaa;
}

ul {
    list-style-type: none;
    background-color: #f7f7f7;
    padding: 1%;
    margin-top: 2%;
    margin-bottom: 2%;
    display: grid;
    grid-template-columns: 10% 85% 5%;
    text-align: left;
    font-size: 1.2rem;
}

.listItem {
  color: black;
}

/* Styling Checkbox Starts */
.checkbox-label {
    display: block;
    position: relative;
    margin: auto;
    cursor: pointer;
    font-size: 1.2rem;
    line-height: 24px;
    height: 24px;
    width: 24px;
    clear: both;
}

.checkbox-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkbox-label .checkbox-custom {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 24px;
    width: 24px;
    background-color: transparent;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    border: 2px solid black;
}


.checkbox-label input:checked ~ .checkbox-custom {
    background-color: #f7f7f7;
    border-radius: 5px;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity:1;
    border: 2px solid black;
}


.checkbox-label .checkbox-custom::after {
    position: absolute;
    content: "";
    left: 10px;
    top: 10px;
    height: 0px;
    width: 0px;
    border-radius: 5px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(0deg) scale(0);
    -ms-transform: rotate(0deg) scale(0);
    transform: rotate(0deg) scale(0);
    opacity:1;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
}


.checkbox-label input:checked ~ .checkbox-custom::after {
  -webkit-transform: rotate(45deg) scale(1);
  -ms-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
  opacity:1;
  left: 6.5px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: solid black;
  border-width: 0 2px 2px 0;
  background-color: transparent;
  border-radius: 0;
}

.removeBtn {
    cursor: pointer;
    border: 2px solid black;
    border-radius: 5px;
    color: black;
    background-color: #f7f7f7;
    font-weight: bold;
}

.removeBtn:hover {
    background-color: black;
    border: 2px solid black;
    color: white;
}

</style>

<script>
import { bus } from '@/main.js'
import {
  db
} from '../firebaseConfig'

export default {
  name: 'home',
  data() {

    return {
      todo: {
        title: '',
        completed: false
      },
      todos: [],
      error: ''
    }
  },
  methods: {
    async addTodo() {
        if (this.todo.title == '') {
            this.error = "You haven't defined a title."
            return alert(this.error)
        }

        await db.collection('todos').add({
          title: this.todo.title,
          completed: this.todo.completed
        })

      let todo = {
        title: this.todo.title,
        completed: this.todo.completed}

      this.todos.push(todo)

      this.todo.title = ''
      this.todo.completed = false
    },
    async removeTodo(todo) {
      

      let removeable = this.todos.indexOf(todo)

      this.todos.splice(removeable, 1)

      await db.collection('todos').doc(todo.id).delete()
    },
    checked(todo) {
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            }
        }, false);
    }
  },
  created() {
   bus.$on('create-camping', (data) => {
    data.forEach(item => {
      this.todos.push(item)

      db.collection('todos').add({
          title: item.title,
          completed: item.completed
    })
   })}),
   bus.$on('create-festival', (data) => {
    data.forEach(item => {
      this.todos.push(item)

      db.collection('todos').add({
          title: item.title,
          completed: item.completed
    })
   })}),
   bus.$on('create-travel', (data) => {
    data.forEach(item => {
      this.todos.push(item)

      db.collection('todos').add({
          title: item.title,
          completed: item.completed
    })
   })})

   db.collection('todos').get().then((querySnapshot) => {
     querySnapshot.forEach(doc => this.todos.push({
       id:doc.id,
       ...doc.data()
     }))
   })
  }
}
</script>