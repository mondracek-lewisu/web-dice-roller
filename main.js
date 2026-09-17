// Yahtzee Dice Roller
// Rolls five 6-sided dice using random numbers, updates each die's pips,
// fills in the read-only scorecard fields, and totals the result.

const NUMBER_OF_DICE = 5;
const SIDES_PER_DIE = 6;

/**
 * Returns a random integer between 1 and SIDES_PER_DIE, inclusive.
 */
function rollOneDie() {
  return Math.floor(Math.random() * SIDES_PER_DIE) + 1;
}

/**
 * Rolls all five dice, updates the dice faces and the scorecard,
 * and briefly animates each die to make the roll feel physical.
 */
function rollAllDice() {
  let total = 0;

  for (let dieNumber = 1; dieNumber <= NUMBER_OF_DICE; dieNumber++) {
    const result = rollOneDie();
    total += result;

    const dieElement = document.querySelector(`.die[data-die="${dieNumber}"]`);
    const valueField = document.getElementById(`value-${dieNumber}`);

    dieElement.setAttribute("data-value", result);
    valueField.value = result;

    // Retrigger the tumble animation even on repeated identical rolls.
    dieElement.classList.remove("is-rolling");
    // Forcing a reflow lets the animation restart cleanly.
    void dieElement.offsetWidth;
    dieElement.classList.add("is-rolling");
  }

  document.getElementById("value-total").value = total;
}