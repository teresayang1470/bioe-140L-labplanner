var source_rows = 3;
function add_source_row() {
    source_rows++;
    
    var table = document.getElementById("source");
    var row = table.insertRow(table.rows.length);
    
    var t1 = document.createElement("input");
    var label = row.insertCell(0);
    t1.id = "src_label_" + source_rows;
    label.appendChild(t1);
    
    var t2 = document.createElement("input");
    var location = row.insertCell(1);
    t2.id = "loc_" + source_rows;
    location.appendChild(t2);
}

var sample_rows = 3;
function add_sample_row() {
    sample_rows++;
    
    var table = document.getElementById("samples");
    var row = table.insertRow(table.rows.length);
        
    var t2 = document.createElement("input");
    var label = row.insertCell(0);
    t2.id = "label_" + sample_rows;
    label.appendChild(t2);
    
    var t3 = document.createElement("input");
    var product = row.insertCell(1);
    t3.id = "product_" + sample_rows;
    product.appendChild(t3);
    
    var t4 = document.createElement("input");
    var strain = row.insertCell(2);
    t4.id = "strain_" + sample_rows;
    strain.appendChild(t4);
    
    var t5 = document.createElement("input");
    var ab = row.insertCell(3);
    t5.id = "ab_" + sample_rows;
    ab.appendChild(t5);
    
    var t6 = document.createElement("input");
    var incubate = row.insertCell(4);
    t6.id = "incubate_" + sample_rows;
    t6.value = "°C";
    incubate.appendChild(t6);
}

function generate_sheet() {
    // heading
    var title = document.getElementById("expt_title");
    title.innerHTML = document.getElementById("expt_name").value + "/" + document.getElementById("part_name").value + ": Assembly";
    title.style.fontSize = "16pt";
    title.style.fontWeight = "bold";
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createElement("br"));
    
    // source
    var title = document.getElementById("source_title");
    if (document.getElementById("ligations").checked) {
        title.innerHTML = "<b>source: </b> ligations on thermocycler"
    } else {
        title.innerHTML = "<b>source: </b>"
    }
    var source = document.getElementById("sheet_source");
    var header = document.createElement("tr");
    source.appendChild(header);
    var label = document.createElement("th");
    label.innerHTML = "label &nbsp &nbsp &nbsp &nbsp &nbsp";
    var location = document.createElement("th");
    location.innerHTML = "location &nbsp &nbsp &nbsp &nbsp &nbsp";
    header.appendChild(label);
    header.appendChild(location);
    
    for (var i = 0; i < source_rows; i++) {
        var row = source.insertRow(source.rows.length);

        var label = row.insertCell(0);
        label.innerHTML = document.getElementById("src_label_" + (i + 1)).value;
        
        var location = row.insertCell(1);
        location.innerHTML = document.getElementById("loc_" + (i + 1)).value;
    }
    source.appendChild(document.createElement("br"));
    
    // samples
    var title = document.getElementById("sample_title");
    title.innerHTML = "<b>samples: </b>";
    var samples = document.getElementById("sheet_samples");
    var header = document.createElement("tr");
    samples.appendChild(header);
    var label = document.createElement("th");
    label.innerHTML = "label &nbsp &nbsp &nbsp &nbsp &nbsp";
    var product = document.createElement("th");
    product.innerHTML = "product &nbsp &nbsp &nbsp &nbsp &nbsp";
    var strain = document.createElement("th");
    strain.innerHTML = "strain &nbsp &nbsp &nbsp &nbsp &nbsp";
    var ab = document.createElement("th");
    ab.innerHTML = "antibiotic &nbsp &nbsp &nbsp &nbsp &nbsp";
    var incubate = document.createElement("th");
    incubate.innerHTML = "incubate &nbsp &nbsp &nbsp &nbsp &nbsp";
    header.appendChild(label);
    header.appendChild(product);
    header.appendChild(strain);
    header.appendChild(ab);
    header.appendChild(incubate);
    
    for (var i = 0; i < sample_rows; i++) {
        var row = samples.insertRow(samples.rows.length);

        var label = row.insertCell(0);
        label.innerHTML = document.getElementById("label_" + (i + 1)).value;
        
        var product = row.insertCell(1);
        product.innerHTML = document.getElementById("product_" + (i + 1)).value;
        
        var strain = row.insertCell(2);
        strain.innerHTML = document.getElementById("strain_" + (i + 1)).value;
        
        var ab = row.insertCell(3);
        ab.innerHTML = document.getElementById("ab_" + (i + 1)).value;
        
        var incubate = row.insertCell(4);
        incubate.innerHTML = document.getElementById("incubate_" + (i + 1)).value;
    }
    samples.appendChild(document.createElement("br"));
    
    var rescue = document.getElementById("rescue_text");
    if (document.getElementById("rescue").checked) {
        rescue.innerHTML = "rescue_required: yes";
    } else {
        rescue.innerHTML = "rescue_required: no";
    }
}
