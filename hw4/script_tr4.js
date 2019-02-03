'use strict'

const PRIORITY_TYPES = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };
const notepad = {
    notes: [
        {id: '1', title: 'morning', body: 'sport', priority: 0},
        {id: '2', title: 'afternoon', body: 'homework', priority: 1},
        {id: '3', title: 'evening', body: 'cinema', priority: 2}
    ],

    getNotes() {
      return  notepad.notes
    },

    findNoteById(id) {
        for (const note of notepad.notes){
        console.log(note.id)
            if (note.id===id){
                return note;
            }
        }
    },

    saveNote(note){
        console.log(note)
        notepad.notes.push(note)
    },

    deleteNote(id) {
        for (let i = 0; i < notepad.notes.length; i += 1) {
          const note = notepad.notes[i];
    
          if (note.id === id) {
            notepad.notes.splice(i, 1);
          }
        }
      },
      updateNoteContent(id, updatedContent) {
        const note=notepad.findNoteById(id);
        if (!note) return;
        note.=updatedContent;
        /*
         * Обновляет контент заметки
         * updatedContent - объект с полями вида {имя: значение, имя: значение}
         * Свойств в объекте updatedContent может быть произвольное количество
         *
         * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
         * Возвращает: обновленную заметку
         */
      },
      updateNo
      
}  
    console.log(notepad.getNotes())
    console.log(notepad)
    const note=console.log(notepad.findNoteById('3'))
    console.log(note)
    notepad.saveNote({id: '4', title: 'night', body: 'reading', priority: 2})
    console.log(notepad)
    // const deletedNote=console.log(notepad.deleteNote('1'))
    // console.log(deletedNote)




//     updateNoteContent(id, updatedContent) {
//       /*
//        * Обновляет контент заметки
//        * updatedContent - объект с полями вида {имя: значение, имя: значение}
//        * Свойств в объекте updatedContent может быть произвольное количество
//        *
//        * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
//        * Возвращает: обновленную заметку
//        */
//     },
//     updateNotePriority(id, priority) {
//       /*
//        * Обновляет приоритет заметки
//        *
//        * Принимает: идентификатор заметки и ее новый приоритет
//        * Возвращает: обновленную заметку
//        */
//     },
//     filterNotesByQuery(query) {
//       /*
//        * Фильтрует массив заметок по подстроке query.
//        * Если значение query есть в заголовке или теле заметки - она подходит
//        *
//        * Принимает: подстроку для поиска в title и body заметки
//        * Возвращает: новый массив заметок, контент которых содержит подстроку
//        */
//     },
//     filterNotesByPriority(priority) {
//       /*
//        * Фильтрует массив заметок по значению приоритета
//        * Если значение priority совпадаем с приоритетом заметки - она подходит
//        *
//        * Принимает: приоритет для поиска в свойстве priority заметки
//        * Возвращает: новый массив заметок с подходящим приоритетом
//        */
//     },
//   };