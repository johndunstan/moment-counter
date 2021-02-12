export const initialState = {
  showCompleted: true,
  listOfLists: [
    {
      id: 1,
      name: 'NuCamp Saturdays',
      items: [
        {
          id: 1,
          isComplete: true,
          description: null,
          date: null,
          time: null,
          duration: null,
        },
        {
          id: 2,
          isComplete: false,
          description: null,
          date: null,
          time: null,
          duration: null,
        },
        {
          id: 3,
          isComplete: true,
          description: null,
          date: null,
          time: null,
          duration: null,
        },
        {
          id: 4,
          isComplete: false,
          description: null,
          date: null,
          time: null,
          duration: null,
        },
        {
          id: 5,
          isComplete: false,
          description: null,
          date: null,
          time: null,
          duration: null,
        },
      ],
    },
  ],
}

export const Reducer = (state = initialState, action) => {
  return state
}
