export const nodes = [
  {
    id: 1,
    title: "Input",
    category: "trigger",
    data: {
      id: 1,
      type: "input",
      position: { x: 100, y: 50 },
      data: {
        label: "JSON Input",
        config: {
          operation: "F1"
        },
        maindata: [
          {
            id: 1,
            name: "Raj",
            age: 22,
            role: "developer",
            salary: 35000,
          },
          {
            id: 2,
            name: "Sam",
            age: 17,
            role: "designer",
            salary: 25000,
          },
          {
            id: 3,
            name: "John",
            age: 25,
            role: "developer",
            salary: 45000,
          },
          {
            id: 4,
            name: "Anu",
            age: 20,
            role: "designer",
            salary: 30000,
          },
        ],
      },
    },
  },
  {
    id: 2,
    title: "Filter",
    category: "dataprocessing",
    data: {
      id: 2,
      // type: "filter",
      position: { x: 120, y: 50 },
      data: {
        label: "Filter",
        config: {
          operation: "F2",
          field: null,
          operator: null,
          value: null,
        }
      },
    },
  },
  {
    id: 3,
    title: "Select Fields",
    category: "dataprocessing",
    data: {
      id: 3,
      // type: "selected-fields",
      position: { x: 120, y: 50 },
      data: {
        label: "Select Fields",
        config: {
          operation: "F3"
        },
      },
    },
  },
  {
    id: 4,
    title: "Remove Field",
    category: "dataprocessing",
    data: {
      id: 4,
      // type: "remove",
      position: { x: 100, y: 50 },
      data: {
        label: "Remove Fields",
        config: {
          operation: "F4"
        },
      },
    },
  },
  {
    id: 5,
    title: "Add Field",
    category: "dataprocessing",
    data: {
      id: 5,
      // type: "add-field",
      position: { x: 100, y: 50 },
      data: {
        label: "Add Field",
        config: {
          operation: "F5"
        },
      },
    },
  },
  {
    id: 6,
    title: "Condition",
    category: "logic",
    data: {
      id: 6,
      // type: "condition",
      position: { x: 100, y: 50 },
      data: {
        label: "Condition",
        config: {
          operation: "F6"
        },
      },
    },
  },
  {
    id: 7,
    title: "Switch",
    category: "logic",
    data: {
      id: 7,
      // type: "switch",
      position: { x: 100, y: 50 },
      data: {
        label: "Switch",
        config: {
          operation: "F7"
        },
      },
    },
  },
  {
    id: 8,
    title: "Sort",
    category: "transform",
    data: {
      id: 8,
      // type: "sort",
      position: { x: 100, y: 50 },
      data: {
        label: "Sort",
        config: {
          operation: "F8"
        },
      },
    },
  },
  {
    id: 9,
    title: "Limit",
    category: "transform",
    data: {
      id: 9,
      // type: "limit",
      position: { x: 100, y: 50 },
      data: {
        label: "Limit",
        config: {
          operation: "F9"
        },
      },
    },
  },
  {
    id: 10,
    title: "Output",
    category: "output",
    data: {
      id: 10,
      type: "output",
      position: { x: 100, y: 50 },
      data: {
        label: "Output",
        config: {
          operation: "F10",
        }
      },
    },
  },
];
