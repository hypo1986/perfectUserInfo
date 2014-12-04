/**
 * Name:perfectinfo.js
 * Date:2014-12-3
 */

$(function () {
    
    var perfectUserInfo = {
        init:function(){
            this.formEl = $('.pimr-form-tpl');
            this.inputEl = $('.perfect-info-inp',this.formEl);
            this.btnEl = $('.pif-btn',this.formEl);
            this.pifSex = $('.pif-sex',this.formEl);
            //性别模拟
            this.pifSex.click(function(evt){
                perfectUserInfo.pifSex.removeClass('on');
                $(this).addClass('on');
                evt.preventDefault();
            });
            //完成提交
            this.btnEl.click(function(evt){
                if(perfectUserInfo.isValid()){
                    /*var username = $('#pimName').val(),
                        useremail = $('#pimEmail').val(),
                        userpwd = $('#pimPassword').val(),
                        usersex = $('.pif-sex.on').attr('val');
                    $.ajax({
                        "type":"post",
                        "url":"/",
                        "data":{'username':username,'useremail':useremail,'userpwd':userpwd,'usersex':usersex},
                        "success":function(responseData){
                            if(responseData.success){
                                location.href = '/';
                            }       
                        }   
                    }); */
                    alert('success.');
                }
                evt.preventDefault();
            });
            //input 失去焦点 验证
            this.formEl.on('blur','#pimName',function(){
                var meEl = $(this),
                    meElVal = $.trim(meEl.val());
                //昵称验证
                perfectUserInfo.isClear(meEl);
                if(meElVal.length < 1){
                    perfectUserInfo.inputFail(meEl);
                }else{
                    perfectUserInfo.inputSuccess(meEl);
                }
            }).on('blur','#pimEmail',function(){
                var meEl = $(this),
                    meElVal = $.trim(meEl.val());
                var emailNum = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                //邮箱验证
                perfectUserInfo.isClear(meEl);
                if(emailNum.test(meElVal) == false || meElVal == ''){
                    perfectUserInfo.inputFail(meEl);
                }else{
                    perfectUserInfo.inputSuccess(meEl);
                }
            }).on('blur','#pimPassword',function(){
                var meEl = $(this),
                    meElVal = $.trim(meEl.val());
                //密码验证
                perfectUserInfo.isClear(meEl);
                if(meElVal.length < 6){
                    perfectUserInfo.inputFail(meEl);
                }else{
                    perfectUserInfo.inputSuccess(meEl);
                }
            });
        },
        isValid:function(){
            var isPassed = true;
            var pimNameEl = $('#pimName'),
                pimEmailEl = $('#pimEmail'),
                pimPasswordEl = $('#pimPassword'),
                pifChkEl = $('.pif-chk');
            
            pimNameEl.blur();//昵称验证
            pimEmailEl.blur();//邮箱验证
            pimPasswordEl.blur();//密码验证
            $('.perfect-info-inp',perfectUserInfo.formEl).each(function(){
                if($(this).hasClass('inpon')){
                    isPassed = false; 
                    return false;
                }
            });
            //服务条款验证
            if(!pifChkEl.is(':checked')){
                isPassed = false; 
                alert('请同意服务条款！');
                return false;
            }
            return isPassed;
        },
        inputFail:function(el){
            el.addClass('inpon');
            el.nextAll('.inp-error').show();
        },
        inputSuccess:function(el){
            el.next('.inp-ok').show();
        },
        isClear:function(el){
            el.removeClass('inpon');
            el.nextAll('.inp-error').hide();
            el.next('.inp-ok').hide();
        }
    };
    perfectUserInfo.init();


})
    
    
