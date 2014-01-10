
  Template.body.showThis = function () {
    return NodesDb.find();
  };

  Template.body.events({

    'click #newNode' : function(){
      Cyan.Nodes.create("New Node", {x:250, y:250}, this._id);
    },
    'click .removeNode' : function(){
      Cyan.Nodes.remove(this._id);
    }

  });