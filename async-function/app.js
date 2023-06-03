async function deepCopyAsync(objToCopy) {
    return new Promise((resolve, reject) => {
        if(objToCopy instanceof Object && !(Array.isArray(objToCopy))) {
            function deepCopyObject(sameObject) {
                const result = {};
                for(let key in objToCopy) {
                    if(typeof objToCopy[key] === 'object') {
                        deepCopyAsync(objToCopy[key]);
                    };
                    result[key] = objToCopy[key];
                };
                return result;
            };
            resolve(deepCopyObject(objToCopy))
        } else {
            reject('your argument is not an object');
        };
    });
};
