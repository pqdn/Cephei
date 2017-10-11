let nav = document.getElementById("nav-list");
if(nav !== null && nav !== undefined) {
  nav.addEventListener("click", activeClassToggler, false);
}

function activeClassToggler(e) {
  let elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  e.target.className = "active";
}

let agentTableCancel = document.getElementById("agent-table-cancel");
if(agentTableCancel !== null && agentTableCancel !== undefined){
  agentTableCancel.addEventListener("click", cancelFunction, false);
}

function cancelFunction(){
  location.reload();
}


/**
 * Гибкая и быстрая маска ввода для input-элементов
 */
Array.prototype.forEach.call(document.body.querySelectorAll("*[data-mask]"), applyDataMask);

function applyDataMask(field) {
  let mask = field.dataset.mask.split('');

  // For now, this just strips everything that's not a number
  function stripMask(maskedData) {
    function isDigit(char) {
      return /\d/.test(char);
    }
    return maskedData.split('').filter(isDigit);
  }

  // Replace `_` characters with characters from `data`
  function applyMask(data) {
    return mask.map(function(char) {
      if (char != '_') return char;
      if (data.length == 0) return char;
      return data.shift();
    }).join('')
  }

  function reapplyMask(data) {
    return applyMask(stripMask(data));
  }

  function changed() {
    let oldStart = field.selectionStart;
    let oldEnd = field.selectionEnd;

    field.value = reapplyMask(field.value);

    field.selectionStart = field.value.length;
    field.selectionEnd = oldEnd;
    field.setSelectionRange(field.value.length, field.value.length);
  }

  field.addEventListener('click', changed);
  field.addEventListener('input', changed);
}

/**
 * Функция форматорования даты
 * @param formatString строка вида #DD#/#MM#/#YYYY# #hh#:#mm#:#ss#
 */
Date.prototype.customFormat = function(formatString){
  var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
  YY = ((YYYY=this.getFullYear())+"").slice(-2);
  MM = (M=this.getMonth()+1)<10?('0'+M):M;
  MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
  DD = (D=this.getDate())<10?('0'+D):D;
  DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3);
  th=(D>=10&&D<=20)?'th':((dMod=D%10)===1)?'st':(dMod===2)?'nd':(dMod===3)?'rd':'th';
  formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
  h=(hhh=this.getHours());
  if (h===0) h=24;
  if (h>12) h-=12;
  hh = h<10?('0'+h):h;
  hhhh = hhh<10?('0'+hhh):hhh;
  AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
  mm=(m=this.getMinutes())<10?('0'+m):m;
  ss=(s=this.getSeconds())<10?('0'+s):s;
  return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
};



