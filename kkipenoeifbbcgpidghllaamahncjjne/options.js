
function init() {
   var ui={
      save_info:'save',
      ads:'ads'
   };
   for (var el in ui){
      ui[el]=document.getElementById(ui[el]);
   }
   var options=['ads'];
   
   
   
   function saveOptions(opt, val) {
      localStorage[opt] = val
   }

   function restoreOptions(arr) {
      for (var i in arr) {
         if (!arr.hasOwnProperty(i)) {
            continue
         }
         if (localStorage[arr[i]])
            document.getElementById(arr[i]).value=localStorage[arr[i]];
      }
   }

   var _tm=null
   function saveVisual(t) {
      var text = t || 'Данные сохранены';
      ui.save_info.innerHTML=text;
      setTimeout(function(){ui.save_info.className='show';},2);
      clearTimeout(_tm);
      _tm=setTimeout(function(){ui.save_info.className=''},2500);
   }
   
   function save_options(e) {
      saveVisual();
      saveOptions('ads', ui.ads.value)
   };   
   ui.ads.addEventListener('change', save_options);


   restoreOptions(options)
}

document.addEventListener('DOMContentLoaded', init);