/** mini cms make by adyjul v.0.0 */ 

$(document).ready(function(){
    $('.simpan').click(function(){
        var option_radio = $('input:radio[name=exampleRadios]:checked').val();
        
        const valueGrid = 12
    
    
        // $('.content-row').append(`<div class="row"</div>`)
    
        var element = '<div class="row mb-3">'
        var elementNew = ''
        var idElement = 0;
        
    
        for (let i = 0; i < valueGrid/parseInt(option_radio); i++) {            
            idElement+=1
            elementNew += `<div id=${idElement} class="col-md-${option_radio} grid-content"><div class="popup active"><ul style="display: contents;"><li><a  type="button" class="btn" data-toggle="modal" data-target="#modalContent">Tambah Element</a></li><li><a class="hapus-layout" >Hapus</a></li></ul></div><div class="card-layout"><i class="fas fa-plus tambah-content" style="cursor: pointer;"></i></div></div>`                         
            
        }
    
       
    
        $('.content-row').append(element+elementNew+'</div>')


        $(".grid-content").click(function(){            
          var elementPopup = $(this).children(0)
          elementPopup.toggleClass("active")
        })

        $(".hapus-layout").click(function(){
          var elemenParent = $(this).parent().parent().parent().parent().parent()
          if(elemenParent[0].childNodes.length != 1){
            $(this).parent().parent().parent().parent().remove()            
          }
          else if(elemenParent[0].childNodes.length == 1 ){
            $(this).parent().parent().parent().parent().parent().remove()            
          }

          console.log()
        })
        
        
    })

    
 
})


