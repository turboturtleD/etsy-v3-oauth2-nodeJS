function getSessionTenantShops(){
    return new Promise((resolve,reject) => {
        $.ajax({
        url: '/tenant-shops',
        type: 'GET',
        success: function(responseText){
            resolve(responseText)
        },
        error: function(error){
            reject(error)
            console.log(error)
            
        }
        })
    })
}

function getShopBalance(user_id){
    return new Promise(async (resolve,reject) =>{
        try {
            let request = {
                endpoint : 'getShopPaymentAccountLedgerEntries',
                parameters : {
                    min_created : Math.floor(((new Date()*1)-1000*60*60*24*30)/1000),
                    max_created : Math.floor((new Date()*1)/1000),
                    limit : 1
                }
            }
            let result = await private(user_id,request)
            let balance = result.results[0].balance/100
            resolve(balance.toFixed(2))
        }
        catch(e) {
            console.log(e)
            reject(e)
        }
    })
    
}

function private(user_id,request,formData) {
    return new Promise((resolve,reject)=>{
        let ajaxRequest = {
            url: '/private/' + user_id + '/req/' + btoa(JSON.stringify(request)),
            type: 'POST',
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function(responseText){
                resolve(responseText)
            },
            error: function(error){
                reject(error.responseText)
            }
        }
        if(formData != undefined && formData != null)ajaxRequest.data = formData
        $.ajax(ajaxRequest)
    })
}

function public(request) {
    return new Promise((resolve,reject)=>{
        $.ajax({
            url: '/public/req/' + btoa(JSON.stringify(request)),
            type: 'GET',
            dataType: 'json',
            success: function(responseText){
                resolve(responseText)
            },
            error: function(error){
                reject(error.responseText)
            }
        })
    })
}
