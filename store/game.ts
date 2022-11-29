import { defineStore } from "pinia";

export type Operator = "+" | "-" | ":" | "*";
export type GameState = {
  availableOperations: readonly Operator[]
  selectedOperations: Operator[]
  maxNumber: number,
}

export const useGameStore = defineStore("game", {
  state: (): GameState => {
    return {
      availableOperations: ["+", "-", "*", ":" ],
      selectedOperations: [],
      maxNumber: 0,
    };
  },
  getters: {
    getAvailableOperations: (state) => state.availableOperations,
    getSelectedOperations: (state) => {
      if(!state.selectedOperations.length) {
        return state.availableOperations;
      }
      return state.selectedOperations;
    },
  },
  actions: {
    updateSelectedOperators(operation: Operator[]) {
      this.selectedOperations = operation;
    },
    updateMaxNumber(number: number) {
      this.maxNumber = number;
    }
  }
});