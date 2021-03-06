var exec = require('cordova/exec');

exports.ref = function(path) {
  var _path = path;
  function FbDbRef() {  }

  FbDbRef.setValue = function(updates) { return exports.setValue(_path, updates); };
  FbDbRef.updateChildren = function(updates) { return exports.updateChildren(_path, updates); };
  FbDbRef.child = function(child_path) { return exports.ref(_path + "/" + child_path); };

  return FbDbRef;
}

exports.updateChildren = function(path, updates) {
  return new Promise(function(success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "updateChildren", [path, updates]);
  });
};

exports.setValue = function(path, updates) {
  return new Promise(function(success, error) {
    if (typeof updates == "boolean") {
      exec(success, error, "FirebaseDatabasePlugin", "setValueBoolean", [path, updates]);
    } else if (typeof updates == "number") {
      exec(success, error, "FirebaseDatabasePlugin", "setValueNumber", [path, updates]);
    } else if (typeof updates == "string") {
      exec(success, error, "FirebaseDatabasePlugin", "setValueString", [path, updates]);
    } else {
      exec(success, error, "FirebaseDatabasePlugin", "setValue", [path, updates]);
    }
  });
};

exports.getValue = function (key) {
    return new Promise(function(success, error) {
        exec(success, error, "FirebaseDatabasePlugin", "getValue", [key]);
    });
};



exports.getInfo = function (success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "getInfo", []);
};

exports.setConfigSettings = function (settings, success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "setConfigSettings", [settings]);
};

exports.setDatabasePersistent = function(persistent, success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "setDatabasePersistent", [persistent]);
};

exports.setPersistenceEnabled = function(persistent, success, error) {
    exec(success, error, "FirebaseDatabasePlugin", "setDatabasePersistent", [persistent]);
};
exports.signInWithEmailAndPassword = function(email, password) {
    return new Promise(function(success, error) {
        exec(success, error, "FirebaseDatabasePlugin", "signInWithEmailAndPassword", [email, password]);
    });
};
exports.signInWithFacebook = function(token) {
    return new Promise(function(success, error) {
        exec(success, error, "FirebaseDatabasePlugin", "signInWithFacebook", [token]);
    });
};
