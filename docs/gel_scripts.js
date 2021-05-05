var sample_rows = 3;
function add_sample_row() {
    sample_rows++;
    
    var table = document.getElementById("samples");
    var row = table.insertRow(table.rows.length);
    
    var t1 = document.createElement("input");
    var rxn = row.insertCell(0);
    t1.id = "rxn_" + sample_rows;
    rxn.appendChild(t1);
    
    var t2 = document.createElement("input");
    var size = row.insertCell(1);
    t2.id = "size_" + sample_rows;
    size.appendChild(t2);
    
    var t3 = document.createElement("input");
    var product = row.insertCell(2);
    t3.id = "product_" + sample_rows;
    product.appendChild(t3);
}

function generate_sheet() {
    // heading
    var title = document.getElementById("expt_title");
    title.innerHTML = document.getElementById("expt_name").value + "/" + document.getElementById("part_name").value + ": Gel";
    title.style.fontSize = "16pt";
    title.style.fontWeight = "bold";
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createElement("br"));
    
    // program and protocol
    var source = document.getElementById("source_text");
    source.innerHTML = "<b>source:</b> " + document.getElementById("source").value;
    source.appendChild(document.createElement("br"));
    source.appendChild(document.createElement("br"));
    
    // samples
    var title = document.getElementById("sample_title");
    var text = document.createTextNode("samples:");
    title.style.fontWeight = "bold";
    title.appendChild(text);
    var samples = document.getElementById("sheet_samples");
    var header = document.createElement("tr");
    samples.appendChild(header);
    var rxn = document.createElement("th");
    rxn.innerHTML = "reaction &nbsp &nbsp &nbsp &nbsp &nbsp";
    var size = document.createElement("th");
    size.innerHTML = "size &nbsp &nbsp &nbsp &nbsp &nbsp";
    var product = document.createElement("th");
    product.innerHTML = "product &nbsp &nbsp &nbsp &nbsp &nbsp";
    header.appendChild(rxn);
    header.appendChild(size);
    header.appendChild(product);

    
    for (var i = 0; i < sample_rows; i++) {
        var row = samples.insertRow(samples.rows.length);

        var rxn = row.insertCell(0);
        rxn.innerHTML = document.getElementById("rxn_" + (i + 1)).value;
        
        var size = row.insertCell(1);
        size.innerHTML = document.getElementById("size_" + (i + 1)).value;
        
        var product = row.insertCell(2);
        product.innerHTML = document.getElementById("product_" + (i + 1)).value;
    }
    samples.appendChild(document.createElement("br"));
}
