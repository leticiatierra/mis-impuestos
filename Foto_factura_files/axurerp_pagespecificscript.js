﻿for(var i = 0; i < 23; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u18'] = 'center';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	SetPanelState('u4', 'pd1u4','none','',500,'none','',500);

}
});
gv_vAlignTable['u22'] = 'center';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('confirmar_datos_factura.html');

}
});
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u20'] = 'center';