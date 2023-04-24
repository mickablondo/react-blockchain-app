export default function Currencies() {
    console.log(CallApi())
    return (CallApi());
}

function CallApi() {
    /*return fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
        .then((res) => res.json())
        .then((data) => {
            let options;
            for (var key in data)
            {
                options = options.concat('<option key="').concat(key).concat('">').concat(data[key]).concat('</option>');
            }
            
            return (options);
        })
        .catch((err) => {
            console.log(err.message);
        });
        */
       return 'snif';
}