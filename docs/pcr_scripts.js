var sample_rows = 3;
function add_sample_row() {
    sample_rows++;
    
    var table = document.getElementById("samples");
    var row = table.insertRow(table.rows.length);
    
    var t1 = document.createElement("input");
    var label = row.insertCell(0);
    t1.id = "label_" + sample_rows;
    label.appendChild(t1);
    
    var t2 = document.createElement("input");
    var primer1 = row.insertCell(1);
    t2.id = "primer1_" + sample_rows;
    primer1.appendChild(t2);
    
    var t3 = document.createElement("input");
    var primer2 = row.insertCell(2);
    t3.id = "primer2_" + sample_rows;
    primer2.appendChild(t3);
    
    var t4 = document.createElement("input");
    var template = row.insertCell(3);
    t4.id = "template_" + sample_rows;
    template.appendChild(t4);
    
    var t5 = document.createElement("input");
    var product = row.insertCell(4);
    t5.id = "product_" + sample_rows;
    product.appendChild(t5);
}

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
    t2.id = "src_loc_" + source_rows;
    location.appendChild(t2);
}

var dest_rows = 5;
function add_dest_row() {
    dest_rows++;
    
    var table = document.getElementById("destination");
    var row = table.insertRow(table.rows.length);
    
    var t1 = document.createElement("input");
    var label = row.insertCell(0);
    t1.id = "dest_label_" + dest_rows;
    label.appendChild(t1);
    
    var t2 = document.createElement("input");
    var concentration = row.insertCell(1);
    t2.id = "concentration_" + dest_rows;
    t2.value = "uM";
    concentration.appendChild(t2);
    
    var t3 = document.createElement("input");
    var location = row.insertCell(2);
    t3.id = "dest_loc_" + dest_rows;
    location.appendChild(t3);
}

function generate_sheet() {
    // heading
    var title = document.getElementById("expt_title");
    title.innerHTML = document.getElementById("expt_name").value + "/" + document.getElementById("part_name").value + ": PCR";
    title.style.fontSize = "16pt";
    title.style.fontWeight = "bold";
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createElement("br"));
    
    // program and protocol
    var protocol = document.getElementById("protocol_text");
    protocol.innerHTML = "<b>Protocol:</b> " + document.getElementById("protocol").value;
    var program = document.getElementById("program_text");
    program.innerHTML = "<b>Program:</b> " + document.getElementById("programs").value;
    program.appendChild(document.createElement("br"));
    program.appendChild(document.createElement("br"));
    
    // samples
    var title = document.getElementById("sample_title");
    var text = document.createTextNode("samples:");
    title.style.fontWeight = "bold";
    title.appendChild(text);
    var samples = document.getElementById("sheet_samples");
    var header = document.createElement("tr");
    samples.appendChild(header);
    var sample_label = document.createElement("th");
    sample_label.innerHTML = "label &nbsp &nbsp &nbsp &nbsp &nbsp";
    var primer1 = document.createElement("th");
    primer1.innerHTML = "primer1 &nbsp &nbsp &nbsp &nbsp &nbsp";
    var primer2 = document.createElement("th");
    primer2.innerHTML = "primer2 &nbsp &nbsp &nbsp &nbsp &nbsp";
    var template = document.createElement("th");
    template.innerHTML = "template &nbsp &nbsp &nbsp &nbsp &nbsp";
    var product = document.createElement("th");
    product.innerHTML = "product &nbsp &nbsp &nbsp &nbsp &nbsp";
    header.appendChild(sample_label);
    header.appendChild(primer1);
    header.appendChild(primer2);
    header.appendChild(template);
    header.appendChild(product);

    
    for (var i = 0; i < sample_rows; i++) {
        var row = samples.insertRow(samples.rows.length);

        var label = row.insertCell(0);
        label.innerHTML = document.getElementById("label_" + (i + 1)).value;
        
        var primer1 = row.insertCell(1);
        primer1.innerHTML = document.getElementById("primer1_" + (i + 1)).value;
        
        var primer2 = row.insertCell(2);
        primer2.innerHTML = document.getElementById("primer2_" + (i + 1)).value;
        
        var template = row.insertCell(3);
        template.innerHTML = document.getElementById("template_" + (i + 1)).value;
        
        var product = row.insertCell(4);
        product.innerHTML = document.getElementById("product_" + (i + 1)).value;
    }
    samples.appendChild(document.createElement("br"));
    
    // source
    var title = document.getElementById("source_title");
    var text = document.createTextNode("source:");
    title.style.fontWeight = "bold";
    title.appendChild(text);
    var source = document.getElementById("sheet_source");
    var header = document.createElement("tr");
    source.appendChild(header);
    var source_label = document.createElement("th");
    source_label.innerHTML = "label &nbsp &nbsp &nbsp &nbsp &nbsp";
    var location = document.createElement("th");
    location.innerHTML = "location &nbsp &nbsp &nbsp &nbsp &nbsp";
    header.appendChild(source_label);
    header.appendChild(location);
    
    for (var i = 0; i < source_rows; i++) {
        var row = source.insertRow(source.rows.length);

        var label = row.insertCell(0);
        label.innerHTML = document.getElementById("src_label_" + (i + 1)).value;
        
        var location = row.insertCell(1);
        location.innerHTML = document.getElementById("src_loc_" + (i + 1)).value;
    }
    source.appendChild(document.createElement("br"));
    
    // destination
    var title = document.getElementById("dest_title");
    var text = document.createTextNode("destination:");
    title.style.fontWeight = "bold";
    title.appendChild(text);
    var dest = document.getElementById("sheet_dest");
    var header = document.createElement("tr");
    dest.appendChild(header);
    var dest_label = document.createElement("th");
    dest_label.innerHTML = "label &nbsp &nbsp &nbsp &nbsp &nbsp";
    var conc = document.createElement("th");
    conc.innerHTML = "concentration &nbsp &nbsp &nbsp &nbsp &nbsp";
    var location = document.createElement("th");
    location.innerHTML = "location &nbsp &nbsp &nbsp &nbsp &nbsp";
    header.appendChild(dest_label);
    header.appendChild(conc);
    header.appendChild(location);
    
    for (var i = 0; i < dest_rows; i++) {
        var row = dest.insertRow(dest.rows.length);

        var label = row.insertCell(0);
        label.innerHTML = document.getElementById("dest_label_" + (i + 1)).value;
        
        var label = row.insertCell(1);
        label.innerHTML = document.getElementById("concentration_" + (i + 1)).value;
        
        var location = row.insertCell(2);
        location.innerHTML = document.getElementById("dest_loc_" + (i + 1)).value;
    }
    dest.appendChild(document.createElement("br"));
}
