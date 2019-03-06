(function () { 
    if (!mstrmojo.plugins.MyTestVis) {
        mstrmojo.plugins.MyTestVis = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.CustomVisDropZones",
        "mstrmojo.array"
    );

    mstrmojo.plugins.MyTestVis.MyTestVisDropZones = mstrmojo.declare(
        mstrmojo.vi.models.CustomVisDropZones,
        null,
        {
            scriptClass: "mstrmojo.plugins.MyTestVis.MyTestVisDropZones",
            cssClass: "mytestvisdropzones",
            getCustomDropZones: function getCustomDropZones(){
 },
            shouldAllowObjectsInDropZone: function shouldAllowObjectsInDropZone(zone, dragObjects, idx, edge, context) {
 








},
            getActionsForObjectsDropped: function getActionsForObjectsDropped(zone, droppedObjects, idx, replaceObject, extras) {
 








},
            getActionsForObjectsRemoved: function getActionsForObjectsRemoved(zone, objects) { 
 








},
            getDropZoneContextMenuItems: function getDropZoneContextMenuItems(cfg, zone, object, el) {
 








}
})}());
//@ sourceURL=MyTestVisDropZones.js