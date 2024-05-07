function tablas () {
    let num = "1";

    for (let i = 1; i <= 10; i++)
    {
      document.write(`${num} X ${i} = ${num * i} <br>`);

      let num2 = num + 1;
      
      for (num2; num <= 10; num++) {
        document.write(`${num} X ${i} = ${num * i} <br>`);
      }
        
        
      }

      
    

}

tablas()