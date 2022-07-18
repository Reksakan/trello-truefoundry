const LISTS_CARDS = [
  {
    id: 'list1',
    cardName: 'To Do',
    tasks: [
      {
        taskId: 10011,
        taskName: 'HelpDesk Call BB999',
        isHard: true, 
      },
      {
        taskId: 10012,
        taskName: 'HelpDesk Call AA999',
        isHard: false,
      }  
    ],
  },
  {
    id: 'list2',
    cardName: 'Development',
    tasks: [
      {
        taskId: 10013,
        taskName: 'HelpDesk Call CC999',
        isHard: false, 
      },
      {
        taskId: 10014,
        taskName: 'HelpDesk Call DD999',
        isHard: true,
      }  
    ],
  },
  {
    id: 'list3',
    cardName: 'Testing',
    tasks: [
      {
        taskId: 10015,
        taskName: 'HelpDesk Call EE999',
        isHard: true, 
      },
      {
        taskId: 10016,
        taskName: 'HelpDesk Call FF999',
        isHard: false,
      }  
    ],
  },
  {
    id: 'list4',
    cardName: 'Done',
    tasks: [
      {
        taskId: 10017,
        taskName: 'HelpDesk Call GG999',
        isHard: false, 
      },
      {
        taskId: 10018,
        taskName: 'HelpDesk Call HH999',
        isHard: true,
      }  
    ],
  }
]

export default LISTS_CARDS

// const LISTS_CARDS = {
//   CARDS_ORDER: ['list1','list2','list3','list4'], // 1

//   // 2
//   TASKS: {
//     '10011': {
//       taskName: 'HelpDesk Call BB999',
//       isHard: true, 
//     },
//     '10012': {
//       taskName: 'HelpDesk Call AA999',
//       isHard: false,
//     }
//   },
//   CARDS: {
//     // 2
//     list1: {
//       id: 1,
//       cardName: 'To Do',
//       tasksOrder: ['10011','10012'],
//     },
//     // 2



//     list2: {
//       cardName: 'Development',
//       tasks: [
//         {
//           taskId: 10013,
//           taskName: 'HelpDesk Call CC999',
//           isHard: false, 
//         },
//         {
//           taskId: 10014,
//           taskName: 'HelpDesk Call DD999',
//           isHard: true,
//         }  
//       ],
//     },
//     list3: {
//       cardName: 'Testing',
//       tasks: [
//         {
//           taskId: 10015,
//           taskName: 'HelpDesk Call EE999',
//           isHard: true, 
//         },
//         {
//           taskId: 10016,
//           taskName: 'HelpDesk Call FF999',
//           isHard: false,
//         }  
//       ],
//     },
//     list4: {
//       cardName: 'Done',
//       tasks: [
//         {
//           taskId: 10017,
//           taskName: 'HelpDesk Call GG999',
//           isHard: false, 
//         },
//         {
//           taskId: 10018,
//           taskName: 'HelpDesk Call HH999',
//           isHard: true,
//         }  
//       ],
//     }
//   }
// }