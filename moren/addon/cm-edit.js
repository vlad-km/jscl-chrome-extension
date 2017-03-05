(function(jscl){
'use strict';
(function(values, internals){
var l1=internals.intern('CM-EDITOR');
var l2=internals.intern('CM-EDIT-INIT');
var l3=internals.intern('EDIT');
var l4=internals.intern('CM-HIDE');
var l5=internals.intern('NIL','COMMON-LISP');
var l6=internals.QIList(l1,l2,l3,l4,l5);
var l7=internals.intern('EXPORT','COMMON-LISP');
l7.fvalue(internals.pv,l6);
var l8=internals.intern('CM-BUFFER');
var l9=internals.intern('TEST','KEYWORD');
l9.value=l9;
var l10=internals.intern('EQUAL','COMMON-LISP');
var l11=internals.intern('MAKE-HASH-TABLE','COMMON-LISP');
l8.value=l11.fvalue(internals.pv,l9.value,internals.symbolFunction(l10));
l8;
l1.value=l5.value;
l1;
var l12=internals.intern('CM-OPTIONS');
var l13=internals.make_lisp_string('lineNumbers');
var l14=internals.intern('T','COMMON-LISP');
var l15=internals.make_lisp_string('scrollbarStyle');
var l16=internals.make_lisp_string('simple');
var l17=internals.make_lisp_string('autofocus');
var l18=internals.make_lisp_string('styleActiveLine');
var l19=internals.make_lisp_string('matchBrackets');
var l20=internals.make_lisp_string('theme');
var l21=internals.make_lisp_string('blackboard');
var l22=internals.make_lisp_string('mode');
var l23=internals.make_lisp_string('text/x-common-lisp');
var l24=internals.make_lisp_string('keyMap');
var l25=internals.make_lisp_string('emacs');
var l26=internals.intern('MAKE-JS-OBJECT');
l12.value=l26.fvalue(internals.pv,l13,l14.value,l15,l16,l17,l14.value,l18,l14.value,l19,l14.value,l20,l21,l22,l23,l24,l25);
l12;
var l27=internals.intern('E-CONTAINER');
var l28=internals.make_lisp_string('div');
var l29=internals.QIList(internals.make_lisp_string('id'),internals.make_lisp_string('hidden'),internals.make_lisp_string('class'),l5);
var l30=internals.QIList(internals.make_lisp_string('edit-container-id'),l5,internals.make_lisp_string('e-container'),l5);
var l31=internals.intern('PAIR');
var l32=internals.intern('DOM-CREATE');
l27.value=l32.fvalue(internals.pv,l28,l31.fvalue(internals.pv,l29,l30));
l27;
var l33=internals.intern('F-CONTAINER');
var l34=internals.make_lisp_string('div');
var l35=internals.QIList(internals.make_lisp_string('id'),internals.make_lisp_string('class'),l5);
var l36=internals.QIList(internals.make_lisp_string('f-edit-id'),internals.make_lisp_string('file-container file-container-box'),l5);
l33.value=l32.fvalue(internals.pv,l34,l31.fvalue(internals.pv,l35,l36));
l33;
var l37=internals.intern('E-FORM');
var l38=internals.make_lisp_string('form');
l37.value=l32.fvalue(internals.pv,l38);
l37;
var l39=internals.intern('CM-EDIT-DIV');
var l40=internals.make_lisp_string('textarea');
var l41=internals.QIList(internals.make_lisp_string('id'),internals.make_lisp_string('name'),l5);
var l42=internals.QIList(internals.make_lisp_string('cm-edit-id'),internals.make_lisp_string('cm-editor-code'),l5);
l39.value=l32.fvalue(internals.pv,l40,l31.fvalue(internals.pv,l41,l42));
l39;
var l43=internals.intern('CM-XHR-RECEIVE');
var l44=internals.intern('*ROOT*');
var l45=internals.make_lisp_string('window');
var l46=internals.make_lisp_string('XMLHttpRequest');
var l47=internals.make_lisp_string('opNew');
var l48=internals.make_lisp_string('GET');
var l49=internals.make_lisp_string('open');
var l50=internals.make_lisp_string('bind');
var l51=internals.make_lisp_string('Cache-Control');
var l52=internals.make_lisp_string('no-cache');
var l53=internals.make_lisp_string('setRequestHeader');
var l54=internals.make_lisp_string('bind');
var l55=internals.make_lisp_string('Cache-Control');
var l56=internals.make_lisp_string('no-store');
var l57=internals.make_lisp_string('setRequestHeader');
var l58=internals.make_lisp_string('bind');
var l59=internals.make_lisp_string('xhr');
var l60=internals.make_lisp_string('console');
var l61=internals.make_lisp_string('log');
var l62=internals.make_lisp_string('onreadystatechange');
var l63=internals.make_lisp_string('xhr:lambda ');
var l64=internals.make_lisp_string('console');
var l65=internals.make_lisp_string('log');
var l66=internals.make_lisp_string('readyState');
var l67=internals.make_lisp_string('status');
var l68=internals.make_lisp_string('responseText');
var l69=internals.intern('NULL','COMMON-LISP');
var l70=internals.intern('NOT','COMMON-LISP');
var l71=internals.make_lisp_string('status');
var l72=internals.make_lisp_string('n');
var l73=internals.make_lisp_string('status');
var l74=internals.make_lisp_string(': Error load ');
var l75=internals.intern('NAME');
var l76=internals.make_lisp_string(' - ');
var l77=internals.make_lisp_string('statusText');
var l78=internals.intern('CONCAT');
var l79=internals.make_lisp_string('console');
var l80=internals.make_lisp_string('log');
var l81=internals.make_lisp_string('reqXHRsendNull');
l43.fvalue=(function(){var FUNC=(function JSCL_USER_CMXHRRECEIVE(values,v1,v2,v3){internals.checkArgsAtLeast(arguments.length-1,2);
internals.checkArgsAtMost(arguments.length-1,3);
switch(arguments.length-1){case 2:v3=l5.value;
;
default:break;
}var v4=this;
return (function(){return (function(){var v6=internals.js_to_lisp(internals.symbolValue(l44)[internals.xstring(l47)](internals.lisp_to_js(internals.js_to_lisp((function(){var TMP=internals.symbolValue(l44)[internals.xstring(l45)];
return TMP===undefined?l5.value:TMP;
})())),internals.lisp_to_js(l46)));
(function(){var F=internals.js_to_lisp(v6[internals.xstring(l49)][internals.xstring(l50)](internals.lisp_to_js(v6),internals.lisp_to_js(l48),internals.lisp_to_js(v1),internals.lisp_to_js(l14.value)));
return (typeof F==='function'?F:F.fvalue)(internals.pv);
})();
(function(){var F=internals.js_to_lisp(v6[internals.xstring(l53)][internals.xstring(l54)](internals.lisp_to_js(v6),internals.lisp_to_js(l51),internals.lisp_to_js(l52)));
return (typeof F==='function'?F:F.fvalue)(internals.pv);
})();
(function(){var F=internals.js_to_lisp(v6[internals.xstring(l57)][internals.xstring(l58)](internals.lisp_to_js(v6),internals.lisp_to_js(l55),internals.lisp_to_js(l56)));
return (typeof F==='function'?F:F.fvalue)(internals.pv);
})();
internals.js_to_lisp(internals.symbolValue(l44)[internals.xstring(l60)][internals.xstring(l61)](internals.lisp_to_js(l59),internals.lisp_to_js(v6),internals.lisp_to_js(v2)));
(function(){var v7=v6;
var v8=l62;
return (function(){var FUNC=(function JSCL_USER_NIL(values,v10){switch(arguments.length-1){case 0:v10=l5.value;
;
default:break;
}var v9=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v9=new internals.Cons(arguments[I+1],v9);
var v11=this;
return (function(){var OBJ=v7;
var TMP=(OBJ[internals.xstring(v8)]=internals.lisp_to_js(v10));
return TMP===undefined?l5.value:TMP;
})();
});
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=(function JSCL_USER_NIL(values,v12){internals.checkArgs(arguments.length-1,1);
var v13=this;
internals.js_to_lisp(internals.symbolValue(l44)[internals.xstring(l64)][internals.xstring(l65)](internals.lisp_to_js(l63),internals.lisp_to_js(v12)));
return (function(){var x1=internals.js_to_lisp((function(){var TMP=v6[internals.xstring(l66)];
return TMP===undefined?l5.value:TMP;
})());
if (typeof x1!='number') throw 'Not a number!';
return x1==4?l14.value:l5.value;
})()!==l5.value?(function(){var x1=internals.js_to_lisp((function(){var TMP=v6[internals.xstring(l67)];
return TMP===undefined?l5.value:TMP;
})());
if (typeof x1!='number') throw 'Not a number!';
return x1==200?l14.value:l5.value;
})()!==l5.value?(function(){var F=v2;
return (typeof F==='function'?F:F.fvalue)(values,internals.js_to_lisp((function(){var TMP=v6[internals.xstring(l68)];
return TMP===undefined?l5.value:TMP;
})()));
})():l70.fvalue(internals.pv,l69.fvalue(internals.pv,v3))!==l5.value?(function(){var F=v3;
return (typeof F==='function'?F:F.fvalue)(values,v1,internals.js_to_lisp((function(){var TMP=v6[internals.xstring(l71)];
return TMP===undefined?l5.value:TMP;
})()));
})():internals.js_to_lisp(internals.symbolValue(l44)[internals.xstring(l79)][internals.xstring(l80)](internals.lisp_to_js(l78.fvalue(internals.pv,l72,internals.js_to_lisp((function(){var TMP=v6[internals.xstring(l73)];
return TMP===undefined?l5.value:TMP;
})()),l74,internals.symbolValue(l75),l76,internals.js_to_lisp((function(){var TMP=v6[internals.xstring(l77)];
return TMP===undefined?l5.value:TMP;
})()))))):l5.value;
});
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
return internals.js_to_lisp(internals.symbolValue(l44)[internals.xstring(l81)](internals.lisp_to_js(v6)));
})();
})();
});
FUNC.fname='CM-XHR-RECEIVE';
return FUNC;
})();
l43;
var l82=internals.intern('CM-EXT-KEYS-TABLE');
l82.value=l5.value;
l82;
var l83=internals.intern('DEF-CM-EXTENT-KEYS');
var l84=internals.intern('ODDP','COMMON-LISP');
var l85=internals.intern('MAPCAR','COMMON-LISP');
l83.fvalue=(function(){var FUNC=(function JSCL_USER_DEFCMEXTENTKEYS(values){var v14=l5.value;
var I;
for (I=arguments.length-1-1;I>=0;I--)v14=new internals.Cons(arguments[I+1],v14);
var v15=this;
return (function(){return (function(){var v17={};
var v18=0;
var v19=l5.value;
l85.fvalue(internals.pv,(function JSCL_USER_NIL(values,v20){internals.checkArgs(arguments.length-1,1);
var v21=this;
if (l84.fvalue(internals.pv,v18)!==l5.value) (function(){var v22=v17;
var v23=v19;
return (function(){var FUNC=(function JSCL_USER_NIL(values,v25){switch(arguments.length-1){case 0:v25=l5.value;
;
default:break;
}var v24=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v24=new internals.Cons(arguments[I+1],v24);
var v26=this;
return (function(){var OBJ=v22;
var TMP=(OBJ[internals.xstring(v23)]=internals.lisp_to_js(v25));
return TMP===undefined?l5.value:TMP;
})();
});
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=v20;
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
 else (function(){return (function(){var FUNC=(function JSCL_USER_NIL(values,v28){switch(arguments.length-1){case 0:v28=l5.value;
;
default:break;
}var v27=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v27=new internals.Cons(arguments[I+1],v27);
var v29=this;
return v19=v28;
});
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=v20;
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
return (function(){var v30=1;
var v31=(function(){var x1=v18;
if (typeof x1!='number') throw 'Not a number!';
var x2=v30;
if (typeof x2!='number') throw 'Not a number!';
return x1+x2;
})();
return v18=v31;
})();
}),v14);
return (function(){return (function(){var FUNC=(function JSCL_USER_NIL(values,v33){switch(arguments.length-1){case 0:v33=l5.value;
;
default:break;
}var v32=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v32=new internals.Cons(arguments[I+1],v32);
var v34=this;
return l82.value=v33;
});
var ARGS=[values];
return (function(){var values=internals.mv;
var VS;
VS=v17;
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
})();
})();
});
FUNC.fname='DEF-CM-EXTENT-KEYS';
return FUNC;
})();
l83;
var l86=internals.intern('CM-BIND-EXT-KEYS');
var l87=internals.make_lisp_string('extraKeys');
var l88=internals.make_lisp_string('setOption');
var l89=internals.make_lisp_string('bind');
l86.fvalue=(function(){var FUNC=(function JSCL_USER_CMBINDEXTKEYS(values){internals.checkArgsAtMost(arguments.length-1,0);
var v35=this;
return (function(){return (function(){var F=internals.js_to_lisp(internals.symbolValue(l1)[internals.xstring(l88)][internals.xstring(l89)](internals.lisp_to_js(internals.symbolValue(l1)),internals.lisp_to_js(l87),internals.lisp_to_js(internals.symbolValue(l82))));
return (typeof F==='function'?F:F.fvalue)(values);
})();
})();
});
FUNC.fname='CM-BIND-EXT-KEYS';
return FUNC;
})();
l86;
var l90=internals.make_lisp_string('Ctrl-X Z');
var l91=internals.make_lisp_string('~s~%');
var l92=internals.make_lisp_string('getSelection');
var l93=internals.make_lisp_string('bind');
var l94=internals.intern('READ-FROM-STRING','COMMON-LISP');
var l95=internals.intern('EVAL','COMMON-LISP');
var l96=internals.intern('FORMAT','COMMON-LISP');
var l97=internals.make_lisp_string('Ctrl-X F');
var l98=internals.make_lisp_string('Load buffer name');
var l99=internals.make_lisp_string(': <input type="text" style="width: 10em"/>');
var l100=internals.make_lisp_string('Load buffer ~s ~%');
var l101=internals.make_lisp_string('ctrl-x-f');
var l102=internals.make_lisp_string('cm.value');
var l103=internals.make_lisp_string('setValue');
var l104=internals.make_lisp_string('console');
var l105=internals.make_lisp_string('log');
var l106=internals.make_lisp_string('ctrl-x-f ');
var l107=internals.make_lisp_string('cm');
var l108=internals.make_lisp_string('cm-editor');
var l109=internals.make_lisp_string('console');
var l110=internals.make_lisp_string('log');
var l111=internals.make_lisp_string('setValue');
var l112=internals.make_lisp_string('bind');
var l113=internals.make_lisp_string('~%~s load error: ~a~%');
var l114=internals.make_lisp_string('bottom');
var l115=internals.make_lisp_string('openDialog');
var l116=internals.make_lisp_string('bind');
var l117=internals.make_lisp_string('F11');
var l118=internals.make_lisp_string('fullScreen');
var l119=internals.make_lisp_string('fullScreen');
var l120=internals.make_lisp_string('getOption');
var l121=internals.make_lisp_string('bind');
var l122=internals.make_lisp_string('setOption');
var l123=internals.make_lisp_string('bind');
var l124=internals.make_lisp_string('Esc');
var l125=internals.make_lisp_string('fullScreen');
var l126=internals.make_lisp_string('getOption');
var l127=internals.make_lisp_string('bind');
var l128=internals.make_lisp_string('fullScreen');
var l129=internals.make_lisp_string('setOption');
var l130=internals.make_lisp_string('bind');
l83.fvalue(internals.pv,l90,(function JSCL_USER_NIL(values,v37){internals.checkArgs(arguments.length-1,1);
var v38=this;
return l96.fvalue(values,l14.value,l91,l95.fvalue(internals.pv,l94.fvalue(internals.pv,(function(){var F=internals.js_to_lisp(internals.symbolValue(l1)[internals.xstring(l92)][internals.xstring(l93)](internals.lisp_to_js(internals.symbolValue(l1))));
return (typeof F==='function'?F:F.fvalue)(internals.pv);
})())));
}),l97,(function JSCL_USER_NIL(values,v39){internals.checkArgs(arguments.length-1,1);
var v40=this;
return (function(){var F=internals.js_to_lisp(internals.symbolValue(l1)[internals.xstring(l115)][internals.xstring(l116)](internals.lisp_to_js(internals.symbolValue(l1)),internals.lisp_to_js(l78.fvalue(internals.pv,l98,l99)),internals.lisp_to_js((function JSCL_USER_NIL(values,v49,v50){internals.checkArgs(arguments.length-1,2);
var v51=this;
l96.fvalue(internals.pv,l14.value,l100,v49);
internals.js_to_lisp(internals.symbolValue(l44)[internals.xstring(l104)][internals.xstring(l105)](internals.lisp_to_js(l101),internals.lisp_to_js(internals.symbolValue(l1)),internals.lisp_to_js(v39),internals.lisp_to_js(v49),internals.lisp_to_js(v50),internals.lisp_to_js(l102),internals.lisp_to_js(internals.js_to_lisp((function(){var TMP=v39[internals.xstring(l103)];
return TMP===undefined?l5.value:TMP;
})()))));
return l43.fvalue(values,v49,(function JSCL_USER_NIL(values,v52){internals.checkArgs(arguments.length-1,1);
var v53=this;
internals.js_to_lisp(internals.symbolValue(l44)[internals.xstring(l109)][internals.xstring(l110)](internals.lisp_to_js(l106),internals.lisp_to_js(v52),internals.lisp_to_js(l107),internals.lisp_to_js(v39),internals.lisp_to_js(l108),internals.lisp_to_js(internals.symbolValue(l1))));
return (function(){var F=internals.js_to_lisp(v39[internals.xstring(l111)][internals.xstring(l112)](internals.lisp_to_js(v39),internals.lisp_to_js(v52)));
return (typeof F==='function'?F:F.fvalue)(values);
})();
}),(function JSCL_USER_NIL(values,v54,v55){internals.checkArgs(arguments.length-1,2);
var v56=this;
return l96.fvalue(values,l14.value,l113);
}));
})),internals.lisp_to_js(l26.fvalue(internals.pv,l114,l14.value))));
return (typeof F==='function'?F:F.fvalue)(values);
})();
}),l117,(function JSCL_USER_NIL(values,v57){internals.checkArgs(arguments.length-1,1);
var v58=this;
return (function(){var F=internals.js_to_lisp(v57[internals.xstring(l122)][internals.xstring(l123)](internals.lisp_to_js(v57),internals.lisp_to_js(l118),internals.lisp_to_js(l70.fvalue(internals.pv,(function(){var F=internals.js_to_lisp(v57[internals.xstring(l120)][internals.xstring(l121)](internals.lisp_to_js(v57),internals.lisp_to_js(l119)));
return (typeof F==='function'?F:F.fvalue)(internals.pv);
})()))));
return (typeof F==='function'?F:F.fvalue)(values);
})();
}),l124,(function JSCL_USER_NIL(values,v59){internals.checkArgs(arguments.length-1,1);
var v60=this;
return (function(){var F=internals.js_to_lisp(v59[internals.xstring(l126)][internals.xstring(l127)](internals.lisp_to_js(v59),internals.lisp_to_js(l125)));
return (typeof F==='function'?F:F.fvalue)(internals.pv);
})()!==l5.value?(function(){var F=internals.js_to_lisp(v59[internals.xstring(l129)][internals.xstring(l130)](internals.lisp_to_js(v59),internals.lisp_to_js(l128),internals.lisp_to_js(l5.value)));
return (typeof F==='function'?F:F.fvalue)(values);
})():l5.value;
}));
var l131=internals.intern('CM-SELECT-BUFFER');
var l132=internals.intern('GETHASH','COMMON-LISP');
var l133=internals.make_lisp_string('sharedHist');
var l134=internals.make_lisp_string('getEditor');
var l135=internals.make_lisp_string('bind');
var l136=internals.make_lisp_string('linkedDoc');
var l137=internals.make_lisp_string('bind');
var l138=internals.make_lisp_string('swapDoc');
var l139=internals.make_lisp_string('bind');
var l140=internals.make_lisp_string('iterLinkedDocs');
var l141=internals.make_lisp_string('bind');
var l142=internals.intern('SETHASH');
var l143=internals.intern('MAPHASH','COMMON-LISP');
var l144=internals.make_lisp_string('unlinkDoc');
var l145=internals.make_lisp_string('bind');
var l146=internals.make_lisp_string('focus');
var l147=internals.make_lisp_string('bind');
l131.fvalue=(function(){var FUNC=(function JSCL_USER_CMSELECTBUFFER(values,v61){internals.checkArgs(arguments.length-1,1);
var v62=this;
return (function(){return (function(){var v64=l132.fvalue(internals.pv,v61,internals.symbolValue(l8));
var v65=l5.value;
var v66=l5.value;
var v67=l26.fvalue(internals.pv,l133,l14.value);
if ((function(){var F=internals.js_to_lisp(v64[internals.xstring(l134)][internals.xstring(l135)](internals.lisp_to_js(v64)));
return (typeof F==='function'?F:F.fvalue)(internals.pv);
})()!==l5.value) (function(){return (function(){var FUNC=(function JSCL_USER_NIL(values,v69){switch(arguments.length-1){case 0:v69=l5.value;
;
default:break;
}var v68=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v68=new internals.Cons(arguments[I+1],v68);
var v70=this;
return v64=v69;
});
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=(function(){var F=internals.js_to_lisp(v64[internals.xstring(l136)][internals.xstring(l137)](internals.lisp_to_js(v64),internals.lisp_to_js(v67)));
return (typeof F==='function'?F:F.fvalue)(values);
})();
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
 else l5.value;
(function(){return (function(){var FUNC=(function JSCL_USER_NIL(values,v72){switch(arguments.length-1){case 0:v72=l5.value;
;
default:break;
}var v71=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v71=new internals.Cons(arguments[I+1],v71);
var v73=this;
return v65=v72;
});
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=(function(){var F=internals.js_to_lisp(internals.symbolValue(l1)[internals.xstring(l138)][internals.xstring(l139)](internals.lisp_to_js(internals.symbolValue(l1)),internals.lisp_to_js(v64)));
return (typeof F==='function'?F:F.fvalue)(values);
})();
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
(function(){return (function(){var FUNC=(function JSCL_USER_NIL(values,v75){switch(arguments.length-1){case 0:v75=l5.value;
;
default:break;
}var v74=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v74=new internals.Cons(arguments[I+1],v74);
var v76=this;
return v66=v75;
});
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=(function(){var F=internals.js_to_lisp(v65[internals.xstring(l140)][internals.xstring(l141)](internals.lisp_to_js(v65),internals.lisp_to_js((function JSCL_USER_NIL(values,v82){internals.checkArgs(arguments.length-1,1);
var v83=this;
return (function(){return (function(){var FUNC=(function JSCL_USER_NIL(values,v85){switch(arguments.length-1){case 0:v85=l5.value;
;
default:break;
}var v84=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v84=new internals.Cons(arguments[I+1],v84);
var v86=this;
return v66=v85;
});
var ARGS=[values];
return (function(){var values=internals.mv;
var VS;
VS=v82;
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
}))));
return (typeof F==='function'?F:F.fvalue)(values);
})();
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
if (v66!==l5.value) {l143.fvalue(internals.pv,(function JSCL_USER_NIL(values,v87,v88){internals.checkArgs(arguments.length-1,2);
var v89=this;
return l10.fvalue(internals.pv,v88,v65)!==l5.value?(function(){var v90=v87;
var v91=internals.symbolValue(l8);
var v92=l5.value;
return (function(){var FUNC=(function JSCL_USER_NIL(values,v94){switch(arguments.length-1){case 0:v94=l5.value;
;
default:break;
}var v93=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v93=new internals.Cons(arguments[I+1],v93);
var v95=this;
return l142.fvalue(internals.pv,v94,v90,v91),v94;
});
var ARGS=[values];
return (function(){var values=internals.mv;
var VS;
VS=v66;
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})():l5.value;
}),internals.symbolValue(l8));
(function(){var F=internals.js_to_lisp(v65[internals.xstring(l144)][internals.xstring(l145)](internals.lisp_to_js(v65),internals.lisp_to_js(v66)));
return (typeof F==='function'?F:F.fvalue)(values);
})();
} else l5.value;
return (function(){var F=internals.js_to_lisp(internals.symbolValue(l1)[internals.xstring(l146)][internals.xstring(l147)](internals.lisp_to_js(internals.symbolValue(l1))));
return (typeof F==='function'?F:F.fvalue)(values);
})();
})();
})();
});
FUNC.fname='CM-SELECT-BUFFER';
return FUNC;
})();
l131;
var l148=internals.intern('CM-SELECT-UBUFFER');
var l149=internals.make_lisp_string('swapDoc');
var l150=internals.make_lisp_string('bind');
var l151=internals.make_lisp_string('focus');
var l152=internals.make_lisp_string('bind');
l148.fvalue=(function(){var FUNC=(function JSCL_USER_CMSELECTUBUFFER(values,v96){internals.checkArgs(arguments.length-1,1);
var v97=this;
return (function(){return (function(){var v99=l132.fvalue(internals.pv,v96,internals.symbolValue(l8));
var v100=l5.value;
(function(){return (function(){var FUNC=(function JSCL_USER_NIL(values,v102){switch(arguments.length-1){case 0:v102=l5.value;
;
default:break;
}var v101=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v101=new internals.Cons(arguments[I+1],v101);
var v103=this;
return v100=v102;
});
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=(function(){var F=internals.js_to_lisp(internals.symbolValue(l1)[internals.xstring(l149)][internals.xstring(l150)](internals.lisp_to_js(internals.symbolValue(l1)),internals.lisp_to_js(v99)));
return (typeof F==='function'?F:F.fvalue)(values);
})();
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
return (function(){var F=internals.js_to_lisp(internals.symbolValue(l1)[internals.xstring(l151)][internals.xstring(l152)](internals.lisp_to_js(internals.symbolValue(l1))));
return (typeof F==='function'?F:F.fvalue)(values);
})();
})();
})();
});
FUNC.fname='CM-SELECT-UBUFFER';
return FUNC;
})();
l148;
var l153=internals.intern('CM-OPEN-BUFFER');
var l154=internals.make_lisp_string('text/x-common-lisp');
var l155=internals.make_lisp_string('CodeMirror');
var l156=internals.make_lisp_string('Doc');
l153.fvalue=(function(){var FUNC=(function JSCL_USER_CMOPENBUFFER(values,v104,v105){internals.checkArgs(arguments.length-1,2);
var v106=this;
return (function(){return (function(){var v108=v104;
var v109=internals.symbolValue(l8);
var v110=l5.value;
return (function(){var FUNC=(function JSCL_USER_NIL(values,v112){switch(arguments.length-1){case 0:v112=l5.value;
;
default:break;
}var v111=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v111=new internals.Cons(arguments[I+1],v111);
var v113=this;
return l142.fvalue(internals.pv,v112,v108,v109),v112;
});
var ARGS=[values];
return (function(){var values=internals.mv;
var VS;
VS=internals.js_to_lisp(internals.symbolValue(l44)[internals.xstring(l155)][internals.xstring(l156)](internals.lisp_to_js(v105),internals.lisp_to_js(l154)));
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
})();
});
FUNC.fname='CM-OPEN-BUFFER';
return FUNC;
})();
l153;
var l157=internals.intern('CM-NEW-BUFFER');
var l158=internals.make_lisp_string('Buffer ');
var l159=internals.make_lisp_string(' already in use');
var l160=internals.make_lisp_string('openNotify');
var l161=internals.make_lisp_string('bind');
var l162=internals.make_lisp_string(' ');
l157.fvalue=(function(){var FUNC=(function JSCL_USER_CMNEWBUFFER(values,v114){internals.checkArgs(arguments.length-1,1);
var v115=this;
return (function(){if (l132.fvalue(internals.pv,v114,internals.symbolValue(l8))!==l5.value) (function(){var F=internals.js_to_lisp(internals.symbolValue(l1)[internals.xstring(l160)][internals.xstring(l161)](internals.lisp_to_js(internals.symbolValue(l1)),internals.lisp_to_js(l78.fvalue(internals.pv,l158,v114,l159))));
return (typeof F==='function'?F:F.fvalue)(internals.pv);
})();
 else l153.fvalue(internals.pv,v114,l162);
return l148.fvalue(values,v114);
})();
});
FUNC.fname='CM-NEW-BUFFER';
return FUNC;
})();
l157;
var l163=internals.intern('DOM-APPEND');
var l164=internals.intern('DOM-GET-BODY');
var l165=internals.make_lisp_string('CodeMirror');
var l166=internals.make_lisp_string('fromTextArea');
var l167=internals.make_lisp_string('*scratch*');
l2.fvalue=(function(){var FUNC=(function JSCL_USER_CMEDITINIT(values){internals.checkArgsAtMost(arguments.length-1,0);
var v117=this;
return (function(){l163.fvalue(internals.pv,internals.symbolValue(l37),internals.symbolValue(l39));
l163.fvalue(internals.pv,internals.symbolValue(l33),internals.symbolValue(l37));
l163.fvalue(internals.pv,internals.symbolValue(l27),internals.symbolValue(l33));
l163.fvalue(internals.pv,l164.fvalue(internals.pv),internals.symbolValue(l27));
(function(){return (function(){var FUNC=(function JSCL_USER_NIL(values,v120){switch(arguments.length-1){case 0:v120=l5.value;
;
default:break;
}var v119=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v119=new internals.Cons(arguments[I+1],v119);
var v121=this;
return l1.value=v120;
});
var ARGS=[internals.pv];
return (function(){var values=internals.mv;
var VS;
VS=internals.js_to_lisp(internals.symbolValue(l44)[internals.xstring(l165)][internals.xstring(l166)](internals.lisp_to_js(internals.symbolValue(l39)),internals.lisp_to_js(internals.symbolValue(l12))));
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
l86.fvalue(internals.pv);
return l157.fvalue(values,l167);
})();
});
FUNC.fname='CM-EDIT-INIT';
return FUNC;
})();
l2;
var l168=internals.make_lisp_string('hidden');
var l169=internals.make_lisp_string('focus');
var l170=internals.make_lisp_string('bind');
var l171=internals.make_lisp_string('setValue');
var l172=internals.make_lisp_string('bind');
var l173=internals.make_lisp_string('~%~s load error: ~a~%');
l3.fvalue=(function(){var FUNC=(function JSCL_USER_EDIT(values,v122,v123){internals.checkArgsAtMost(arguments.length-1,2);
switch(arguments.length-1){case 0:v122=l5.value;
;
case 1:v123=l5.value;
;
default:break;
}var v124=this;
return (function(){if (internals.symbolValue(l1)!==l5.value) l5.value;
 else l2.fvalue(internals.pv);
return l70.fvalue(internals.pv,v122)!==l5.value?(internals.js_to_lisp((function(){var TMP=internals.symbolValue(l27)[internals.xstring(l168)];
return TMP===undefined?l5.value:TMP;
})())!==l5.value?l4.fvalue(internals.pv):l5.value,(function(){var F=internals.js_to_lisp(internals.symbolValue(l1)[internals.xstring(l169)][internals.xstring(l170)](internals.lisp_to_js(internals.symbolValue(l1))));
return (typeof F==='function'?F:F.fvalue)(values);
})()):(v123!==l5.value?(l70.fvalue(internals.pv,l132.fvalue(internals.pv,v123,internals.symbolValue(l8)))!==l5.value?l157.fvalue(internals.pv,v123):l5.value,l148.fvalue(values,v123)):l5.value,l43.fvalue(values,v122,(function JSCL_USER_NIL(values,v126){internals.checkArgs(arguments.length-1,1);
var v127=this;
return (function(){var F=internals.js_to_lisp(internals.symbolValue(l1)[internals.xstring(l171)][internals.xstring(l172)](internals.lisp_to_js(internals.symbolValue(l1)),internals.lisp_to_js(v126)));
return (typeof F==='function'?F:F.fvalue)(values);
})();
}),(function JSCL_USER_NIL(values,v128,v129){internals.checkArgs(arguments.length-1,2);
var v130=this;
return l96.fvalue(values,l14.value,l173);
})));
})();
});
FUNC.fname='EDIT';
return FUNC;
})();
l3;
var l174=internals.make_lisp_string('hidden');
l4.fvalue=(function(){var FUNC=(function JSCL_USER_CMHIDE(values,v131){internals.checkArgsAtMost(arguments.length-1,1);
switch(arguments.length-1){case 0:v131=l5.value;
;
default:break;
}var v132=this;
return (function(){return (function(){var v134=internals.symbolValue(l27);
var v135=l174;
return (function(){var FUNC=(function JSCL_USER_NIL(values,v137){switch(arguments.length-1){case 0:v137=l5.value;
;
default:break;
}var v136=l5.value;
var I;
for (I=arguments.length-1-1;I>=1;I--)v136=new internals.Cons(arguments[I+1],v136);
var v138=this;
return (function(){var OBJ=v134;
var TMP=(OBJ[internals.xstring(v135)]=internals.lisp_to_js(v137));
return TMP===undefined?l5.value:TMP;
})();
});
var ARGS=[values];
return (function(){var values=internals.mv;
var VS;
VS=v131!==l5.value?l14.value:l5.value;
if (typeof VS==='object'&&'multiple-value' in VS) ARGS=ARGS.concat(VS);
 else ARGS.push(VS);
return FUNC.apply(null,ARGS);
})();
})();
})();
})();
});
FUNC.fname='CM-HIDE';
return FUNC;
})();
l4;
})(jscl.internals.pv, jscl.internals);
})( typeof require !== 'undefined'? require('./jscl'): window.jscl )
