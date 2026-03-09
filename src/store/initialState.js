// const initialState = {
//   monsters: [
//     {
//       name: "Bandit",
//       init: 14,
//       hp: 45,
//       id: 1,
//       notes: "",
//       status: ["Charmed", "Blinded"],
//     },
//     {
//       name: "Guard",
//       init: 12,
//       hp: 78,
//       id: 2,
//       notes: "guard123",
//       status: [],
//     },
//     {
//       name: "Dragon",
//       init: 21,
//       hp: 254,
//       id: 3,
//       notes: "Dragon123",
//       status: [],
//     },
//   ],
//   monsterFilter: "desc",
// };

const initialState = {
  encounters: [
    {
      id: 1,
      name: "Encounter 1",
      createdAt: "09.03.2026 - 20:31",
      monsters: [
        {
          name: "Bandit",
          init: 14,
          hp: 45,
          id: 1,
          notes: "",
          status: ["Charmed", "Blinded"],
        },
        {
          name: "Guard",
          init: 12,
          hp: 78,
          id: 2,
          notes: "guard123",
          status: [],
        },
        {
          name: "Dragon",
          init: 21,
          hp: 254,
          id: 3,
          notes: "Dragon123",
          status: [],
        },
      ],
    },
  ],
  activeEncounterId: 1,
  monsterFilter: "desc",
};

export default initialState;
