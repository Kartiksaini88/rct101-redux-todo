import { nanoid } from "nanoid"

export let SORT ="SORT"
export const ADD_TODO ="ADD_TODO"

export const DELETE_TODO = "DELETE_TODO"


var count = 1
export let todos =(data)=>{
    return {
        type:ADD_TODO,
        payload:data
    }
}

export let deleteTodo = (by)=>{
    return {
        type:DELETE_TODO,
        payload:by
    }
}

export let sort = (by)=>{
    return{
      type:SORT,
      payload:by
    }
}
