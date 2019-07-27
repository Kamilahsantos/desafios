var  request =  require ('request');

 var cheerio = require ('cheerio');

 var fs = require  ('fs');

 request ('https://old.reddit.com/',function(err,res,body){
     if (err) console.log('Erro'+err);


     var $ =cheerio.load(body);

     $('.flat-list sr-bar hover').each(function(){
         var title =$(this).find('.title may-blank ').text().trim();
         var award =$(this).find('.awarding-link').text().trim();

         console.log('Título:'+title);

         console.log('Avaliação:'+award);

        fs.appendFile('reddit.txt',title+''+award+'\n')


     });

 })