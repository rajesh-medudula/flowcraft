export const nodes = [
  {
    id: 1,
    title: "Manual Trigger",
    category: "trigger",
    data: {
      id: 1,
      type: 'trigger',
      position: {x: 100, y: 50},
      data: {
        label: 'Trigger Step',
      }
    }
  },
  {
    id: 2,
    title: "Input",
    category: "trigger",
    data: {
      id: 2,
      type: 'input',
      position: {x: 100, y: 50},
      data: {
        label: 'JSON Input',
      }
    }
  },
  {
    id: 3,
    title: "Filter",
    category: "dataprocessing",
    data: {
      id: 3,
      type: 'filter',
      position: {x: 120, y: 50},
      data: {
        label: 'Filter',
      }
    }
  },
  {
    id: 4,
    title: "Select Fields",
    category: "dataprocessing",
    data: {
      id: 4,
      type: 'selected-fields',
      position: {x: 120, y: 50},
      data: {
        label: 'Select Fields',
      }
    }
  },
  {
    id: 5,
    title: "Rename",
    category: "dataprocessing",
    data: {
      id: 5,
      type: 'rename',
      position: {x: 100, y: 50},
      data: {
        label: 'Rename Fields',
      }
    }
  },
  {
    id: 6,
    title: "Add Field",
    category: "dataprocessing",
    data: {
      id: 6,
      type: 'add-field',
      position: {x: 100, y: 50},
      data: {
        label: 'Add Field',
      }
    }
  },
  {
    id: 7,
    title: "Condition",
    category: "logic",
    data: {
      id: 7,
      type: 'condition',
      position: {x: 100, y: 50},
      data: {
        label: 'Condition',
      }
    }
  },
  {
    id: 8,
    title: "Switch",
    category: "logic",
    data: {
      id: 8,
      type: 'switch',
      position: {x: 100, y: 50},
      data: {
        label: 'Switch',
      }
    }
  },
  {
    id: 9,
    title: "Sort",
    category: "transform",
    data: {
      id: 9,
      type: 'sort',
      position: {x: 100, y: 50},
      data: {
        label: 'Sort',
      }
    }
  },
  {
    id: 10,
    title: "Limit",
    category: "transform",
    data: {
      id: 10,
      type: 'limit',
      position: {x: 100, y: 50},
      data: {
        label: 'Limit',
      }
    }
  },
  {
    id: 11,
    title: "Output",
    category: "output",
    data: {
      id: 11,
      type: 'output',
      position: {x: 100, y: 50},
      data: {
        label: 'Output',
      }
    }
  }
]
