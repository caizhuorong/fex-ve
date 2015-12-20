(function($){var NAME='autocomplete';var AutoComplete={opts:{show:20,limit:20,action:null,width:null,className:null,filter:function(val,$input){return val;},showValue:function(val){return val;},key:'name',request:function(task,callback){var me=this;this.action?$.ajax({url:this.action,dataType:'json',data:{keyword:task.keyword,limit:me.limit},success:function(data){callback(data);}}):callback();},render:function(data,keyword){var me=this,content='';$.each(data,function(k,v){content+='<li>'+me.highlight(v[me.key],keyword)+'</li>';});return content;},highlight:function(value,keyword){return value.replace(new RegExp('^'+keyword,'gim'),"<span class=\"auto-highlight\">$&</span>");},getValue:function(data){return data[this.key];},event:{hide:[function(time){var $wrap=this.element.$wrap;if(time){$wrap.attr('on-hide',1);setTimeout(function(){if($wrap.attr('on-hide')=='1')$wrap.addClass('hide');},time);}else{$wrap.attr('on-hide',0).addClass('hide');}}],show:[function(){this.element.$wrap.removeClass('hide').attr('on-hide',0);}],hover:[function($ele){$ele.addClass('hover').siblings().removeClass('hover');}],choose:[function($ele,data,me){this.$input.val(this.getValue(data[$ele.index()]));me.call('hide',this);}]},parent:$('body'),element:{},queue:[],map:{}},_attachAutoComplete:function(target,options){var opts=$.extend({},this.opts,options||{});opts.$input=$(target);if($.data(target,NAME))return;$.data(target,NAME,opts);this.init(target);},init:function(target){var opts=this._getOpts(target);this.createWrap(opts);this.bindEvent(opts);},_getOpts:function(target){return $.data(target,NAME);},createWrap:function(opts){var $wrap,$input,$parent;if(opts.element.$wrap)return;opts.element.$wrap=$('<div class="autocomplete-wrap"></div>').appendTo(opts.parent);opts.element.$list=$('<ul class="autocomplete-list"></ul>').appendTo(opts.element.$wrap);$wrap=opts.element.$wrap,$input=opts.$input,$parent=opts.parent;$wrap.width(opts.width||$input.outerWidth()-2);$wrap.css('left',$input.offset().left-$parent.offset().left);$wrap.css('top',$input.offset().top-$parent.offset().top+$input.outerHeight()-1);opts.className&&$wrap.addClass(opts.className);opts.onCreate&&opts.onCreate.apply(opts);},bindEvent:function(opts){var me=this,$input=opts.$input,$list=opts.element.$list,isIe=!-[1,];$input.attr('autocomplete','off');var tirgger=function(){var value=opts.filter($(this).val(),$input);if(value!==''&&opts.original!=value){me.addTask(opts,value);me.run(opts);}else me.call('hide',opts);};$input.on('keyup',function(event){switch(event.which){case 37:case 39:break;case 38:case 40:var offset=(event.which==38)?-1:1;$list[0]&&(function(){var $children=$list.children(),length=$children.length,current=$children.filter('.hover').index();current+=offset;$children.eq(current%length).trigger('mouseenter');})();break;case 13:$list[0]&&$list.find('.hover').trigger('click');break;default:tirgger.apply(this,arguments);break;}});$input.on(isIe?'propertychange':'input',tirgger);if(isIe&&navigator.userAgent.match(/msie (\d)/i)[1]>8)$input.on('keydown',function(event){if(event.which==8||event.which==46)tirgger.apply(this,arguments);});$input.on('focus',tirgger);$input.on('blur',function(){me.call('hide',opts,200);});me.call('hide',opts);},call:function(name,opts){var param=Array.prototype.slice.call(arguments,2);opts.event[name]&&$.each(opts.event[name],function(k,func){this.apply(opts,param);});},addTask:function(opts,keyword){opts.queue.push({keyword:keyword});},run:function(opts){var me=this,queue=opts.queue,length=queue.length,task=queue[length-1];if(opts.running||length===0)return;opts.running=true;var callback=function(){opts.running=false;opts.queue=opts.queue.slice(length);me.run(opts);};var execution=function(){task.run();callback();};if(me.cache(opts,task)){execution();}else{opts.request(task,function(data){data=data||[];me.fillTask(opts,task,data);opts.map[task.keyword]=task;execution();});}},fillTask:function(opts,task,data){var me=this;task.data=data;task.html=opts.render(data,task.keyword);task.run=function(){var $list=opts.element.$list,data=this.data;$list.html(this.html);$list.find('li').on('click',function(){me.call('choose',opts,$(this),data,me);}).on('mouseenter mouseleave',function(target){me.call('hover',opts,$(this),data,me);});if(data.length==0)me.call('hide',opts);else me.call('show',opts);};},cache:function(opts,task){var me=this,map=opts.map,keyword=task.keyword,limit=opts.limit;if(map[keyword]){$.extend(task,map[keyword]);return true;}var filter=function(data,key){var res=[];$.each(data,function(k,v){if(new RegExp('^'+key,'gim').test(opts.getValue(v)))res.push(v);});return res;};for(var i=1;i<Math.min(task.keyword.length,20);i++){var v=task.keyword.substring(0,i);if(map[v]&&map[v].data.length<limit){me.fillTask(opts,task,filter(map[v].data,task.keyword));opts.map[task.keyword]=task;return true;}}return false;},_bindAutoComplete:function(target,event,func){var opts=this._getOpts(target);opts.event[event]&&opts.event[event].push(func);}};$.fn.autocomplete=function(options){var otherArgs=Array.prototype.slice.call(arguments,1);return this.each(function(){typeof options==="string"?AutoComplete["_"+options+"AutoComplete"].apply(AutoComplete,[this].concat(otherArgs)):AutoComplete._attachAutoComplete(this,options);return this;});}})(jQuery);