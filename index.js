const EventEmitter = require('events');

const change = require('change');
const load = require('load');
const sync = require('sync');

class Honeybunch extends EventEmitter {
  constructor(){
    super();


  }
}

const honeybunch = new Honeybunch();
honeybunch.on('change', change);
honeybunch.on('load', load);
honeybunch.on('sync', sync);
