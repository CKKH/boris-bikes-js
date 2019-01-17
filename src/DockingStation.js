function DockingStation() {
  this._dockedBikes = [];
}

DockingStation.prototype.dockedBikes = function() {
  return this._dockedBikes;
}

DockingStation.prototype.dock = function(bike) {
  return this._dockedBikes.push(bike);
}

DockingStation.prototype.release = function(bike) {
  return 'popped bike'
}
