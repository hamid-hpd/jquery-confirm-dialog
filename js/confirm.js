class Confirm{
    #template=`
        <div class='dialogWrapper'>
            <div class='dialogBox'>
                <div class='dialogHeader'>
                    <h4 class='dialogTitle'></h4>
                </div>
                <div class='dialogBody'>
                    <p class='dialogMessage'></p>
                </div>
                <div class='dialogFooter'>
                    <button type='button' class=' btns confirmBtn'>ok</button>
                    <button type='button' class='btns cancelBtn'>cancel</button>
                </div>
            </div>
        </div>
    `;
    #default={
        theme:'white',
        direction:'dltr',
        confirmBtn:'ok',
        cancelBtn:'cancel',
        title:'Confirm',
        message:'Are you sure to continue?',
        confirm:function(){},
        cancel:function(){},
    }
    constructor(options,confirm, cancel){
        this.settings= $.extend({},this.#default,options)
        this.dialog();
        this.confirm=this.settings.confirm;
        this.cancel=this.settings.cancel;
    }
    bindEvents(){
        var that=this
        this.confirmButton.click(function(){
            that.close();
            that.confirm();
        });
        this.cancelButton.click(function(){
            that.close(); 
            that.cancel();
        });
    }
    close(){
        var that=this;
        this.dialog.find('.dialogBox').fadeOut(500,function(){
            $(that.dialog).animate({
                opacity: '0'
            },500,
            function(){
                that.dialog.remove(); 
            });
        })
    }
    open(){
        var that=this;
        $(this.dialog).animate({
            opacity: '1'
        },400,function(){
            that.dialog.find('.dialogBox').fadeIn(600)
        }); 
    }
    dialog() {
       this.dialog= $(this.#template).appendTo('body').addClass(this.settings.theme + " " +this.settings.direction);
       this.dialog.find('.dialogTitle').html(this.settings.title);
       this.dialog.find('.dialogMessage').html(this.settings.message);
       this.confirmButton =this.dialog.find('.confirmBtn').text(this.settings.confirmBtn);
       this.cancelButton=this.dialog.find('.cancelBtn').text(this.settings.cancelBtn);
       this.open();
       this.bindEvents();
    };
}