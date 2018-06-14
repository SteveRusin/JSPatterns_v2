const Singleton =  (function() {
    let instance;

   const returnInstance = () => {
        instance = new Object();
        Object.freeze(instance);
        return instance;
    }



    const getInstance = () => instance
                                    ? (console.log(`Instance exist`), instance)
                                    : (console.log(`No Instance`), returnInstance());

    return {
        getInstance
    }
                                    
}());


Singleton.getInstance();
Singleton.getInstance();
Singleton.getInstance();
