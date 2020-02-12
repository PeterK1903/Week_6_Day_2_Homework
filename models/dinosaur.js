const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

Dinosaur.prototype.findDinoSpecies = function () {
  return this.species;
};

Dinosaur.prototype.finDinoDiet = function() {
  return this.diet;
};

Dinosaur.prototype.findAvgGuests = function(){
  return this.guestsAttractedPerDay;
};

module.exports = Dinosaur;
