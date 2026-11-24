export const nodes = [
  {
    id: 1,
    title: "Input",
    category: "trigger",
    data: {
      id: 1,
      type: 'input',
      position: {x: 100, y: 50},
      data: {
        label: 'JSON Input',
      }
    }
  },
  {
    id: 2,
    title: "Filter",
    category: "dataprocessing",
    data: {
      id: 2,
      type: 'filter',
      position: {x: 120, y: 50},
      data: {
        label: 'Filter',
      }
    }
  },
  {
    id: 3,
    title: "Select Fields",
    category: "dataprocessing",
    data: {
      id: 3,
      type: 'selected-fields',
      position: {x: 120, y: 50},
      data: {
        label: 'Select Fields',
      }
    }
  },
  {
    id: 4,
    title: "Remove Field",
    category: "dataprocessing",
    data: {
      id: 4,
      type: 'remove',
      position: {x: 100, y: 50},
      data: {
        label: 'Remove Fields',
      }
    }
  },
  {
    id: 5,
    title: "Add Field",
    category: "dataprocessing",
    data: {
      id: 5,
      type: 'add-field',
      position: {x: 100, y: 50},
      data: {
        label: 'Add Field',
      }
    }
  },
  {
    id: 6,
    title: "Condition",
    category: "logic",
    data: {
      id: 6,
      type: 'condition',
      position: {x: 100, y: 50},
      data: {
        label: 'Condition',
      }
    }
  },
  {
    id: 7,
    title: "Switch",
    category: "logic",
    data: {
      id: 7,
      type: 'switch',
      position: {x: 100, y: 50},
      data: {
        label: 'Switch',
      }
    }
  },
  {
    id: 8,
    title: "Sort",
    category: "transform",
    data: {
      id: 8,
      type: 'sort',
      position: {x: 100, y: 50},
      data: {
        label: 'Sort',
      }
    }
  },
  {
    id: 9,
    title: "Limit",
    category: "transform",
    data: {
      id: 9,
      type: 'limit',
      position: {x: 100, y: 50},
      data: {
        label: 'Limit',
      }
    }
  },
  {
    id: 10,
    title: "Output",
    category: "output",
    data: {
      id: 10,
      type: 'output',
      position: {x: 100, y: 50},
      data: {
        label: 'Output',
      }
    }
  }
]
