'use strict'

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
  if (this._dockedBikes.length === 0) {
    var error = "Cannot release bike: dockingStation empty";
    throw new Error(error);
  } else if (this._dockedBikes.length >= 0) {
    return this._dockedBikes.pop(bike);
  }
}
