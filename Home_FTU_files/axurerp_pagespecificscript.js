for(var i = 0; i < 19; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Foto_factura.html');

}

});
u18.tabIndex = 0;

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u12'] = 'center';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Foto_factura.html');

}
});
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u7'] = 'center';