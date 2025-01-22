let guidLIst = [];

function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


async function fetchData() {
    let a = await fetch('http://localhost:8080/checks/',
        {
            method: "GET"
        }
    );
    let b = await a.json();
    console.log(JSON.stringify(b))

}

async function createData() {
    let GUID = generateGUID();
    guidLIst.push(GUID);
    let a = await fetch('http://localhost:8080/checks/',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "uuid": GUID,
                "name": "sum_is_zero",
                "version": "0.0.1",
                "released": "2025-01-15T10:37:59.517080",
                "description": "Checks if the sum of the amounts is equal to zero.",
                "lang": "python",
                "params": [
                    "amount_1: int",
                    "amount_2: int",
                    "amount_3: int"
                ],
                "func_body": "return (amount_1 + amount_2 + amount_3) == 0"
            })
        }
    );

}
async function oneCheck() {
    let b = document.getElementById('guid').value;
    let d = document.getElementById('txa');
    let a = await fetch('http://localhost:8080/checks/' + b,
        {
            method: "GET"
        }
    );
    let c = await a.json();
    console.log(JSON.stringify(c));
    d.innerText = JSON.stringify(c);
}
async function PutIn() {
    let bod = document.getElementById('txa').value;
    let b = document.getElementById('guid').value;
    let a = await fetch('http://localhost:8080/checks/' + b,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: (bod)
        }
    );
    let c = await a.json();
    console.log(JSON.stringify(c));

}
async function DelData() {
    let b = document.getElementById('guid').value;
    let a = await fetch('http://localhost:8080/checks/' + b,
        {
            method: "DELETE",
        }
    );
    let c = await a.json();
    console.log(JSON.stringify(c));
}

async function postProcedur() {
    let GUID = generateGUID();
    let a = await fetch('http://localhost:8080/procedures/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "uuid": GUID,
            "name": "some_fancy_name",
            "version": "0.0.1",
            "description": "The scope of this procedure is defined by some theory about how to validate related data.",
            "checks": guidLIst

        })
    })

}
async function getProced() {
    let a = await fetch('http://localhost:8080/procedures/',
        {
            method: "GET"
        }
    );
    let b = await a.json();
    console.log(JSON.stringify(b))

}
async function oneProced() {
    let b = document.getElementById('guidpro').value;
    let d = document.getElementById('txp');
    let a = await fetch('http://localhost:8080/procedures/' + b,
        {
            method: "GET"
        }
    );
    let c = await a.json();
    console.log(JSON.stringify(c));
    d.innerText = JSON.stringify(c);
}

async function PutInProc() {
    let bod = document.getElementById('txp').value;
    let b = document.getElementById('guidpro').value;
    let a = await fetch('http://localhost:8080/procedures/' + b,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: (bod)
        }
    );
    let c = await a.json();
    console.log(JSON.stringify(c));

}
async function DelDataPro() {
    let b = document.getElementById('guidpro').value;
    let a = await fetch('http://localhost:8080/procedures/' + b,
        {
            method: "DELETE",
        }
    );
    let c = await a.json();
    console.log(JSON.stringify(c));
}

async function getProcedChecks() {
    let b = document.getElementById('guidpro').value;
    let a = await fetch('http://localhost:8080/procedures/' + b,
        {
            method: "GET"
        }
    );

    let c = await a.json();
    console.log(JSON.stringify(c));

    for (i = 0; i < c.checks.length; i++) {
        let a = await fetch('http://localhost:8080/checks/' + c.checks[i], {
            method: "GET"
        }
        );
        let b = await a.json();
        console.log(JSON.stringify(b))
    }

}

function guids() {
    for (i = 0; i < guidLIst.length; i++) {
        console.log(guidLIst[i]);
    }
}





fetchData();