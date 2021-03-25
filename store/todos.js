import firebase from '~/plugins/firebase'; //初期化ファイル
import { firestoreAction } from 'vuexfire'; //cloud firestoreを便利にしてくれるものらしい

//データベースの設定
const db = firebase.firestore(); 
const todosRef = db.collection('todos'); //コレクションはtodosという名前で使う

export const state = () => ({
  todos: []
})

export const actions = {
  //firebase初期化
  init: firestoreAction(({ bindFirestoreRef }) => { //引数contextではなくこの記述でbindFirestoreRefのみ受け取ることができる
    bindFirestoreRef('todos', todosRef) //バインドしたいデータの名前とコレクションへの参照を渡す
  }),                                   //stateのtodosにcloud Firestoreのデータがバインド（関連付け）される
  //todo追加
  add: firestoreAction((context, name) => {
    if (name.trim()) { //trim()でtodoの名前が空白でないことを確認している
      todosRef.add({ //コレクションにtodo追加
        name: name, //名前
        done: false, //完了状態 最初は未完了なのでfalse
        created: firebase.firestore.FieldValue.serverTimestamp() //todoが追加された時間 サーバーから時刻を取得する
      })
    }
  }),
  //todo削除
  remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete(); //ドキュメントのidを取得して削除
  }),
  //todoチェック切り替え（完了状態）
  toggle: firestoreAction((context, todo) => { //todoのデータを渡す
    todosRef.doc(todo.id).update({ //完了状態をアップデートする
      done: !todo.done
    })
  })
}