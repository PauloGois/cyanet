/**
 * Created by paulogois on 03/01/2014.
 */

Cyan.Nodes = {
  create: function(position, text, idea) {
    NodesDb.insert({"position": position, "text": text, "idea": idea });
  },
  remove: function(node) {
    NodesDb.remove({"_id": node});
  },
  move: function(node, newPosition) {
    NodesDb.update({"_id": node}, { $set: {"position": newPosition} });
  },
  changeText: function(node, newText) {
    NodesDb.update({"_id": node}, { $set: {"text": newText}});
  },
  scoreUp: function(node, score) {
    NodesDb.update({"_id": node}, { $set: {"score": score}})
  },
  setCurrent: function(node) {
    Session.set("currentNode", node);
  }
}
