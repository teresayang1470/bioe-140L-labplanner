var source_rows = 3;
function add_source_row() {
    source_rows++;
    
    var table = document.getElementById("source");
    var row = table.insertRow(table.rows.length);
    
    var t1 = document.createElement("input");
    var dna = row.insertCell(0);
    t1.id = "dna_" + source_rows;
    dna.appendChild(t1);
    
    var t2 = document.createElement("input");
    var location = row.insertCell(1);
    t2.id = "src_loc_" + source_rows;
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
    var frag1 = row.insertCell(1);
    t3.id = "frag1_" + sample_rows;
    frag1.appendChild(t3);
    
    var t4 = document.createElement("input");
    var frag2 = row.insertCell(2);
    t4.id = "frag2_" + sample_rows;
    frag2.appendChild(t4);
    
    var t5 = document.createElement("input");
    var product = row.insertCell(3);
    t5.id = "product_" + sample_rows;
    product.appendChild(t5);
}

function generate_sheet() {
    // heading
    var title = document.getElementById("expt_title");
    title.innerHTML = document.getElementById("expt_name").value + "/" + document.getElementById("part_name").value + ": Assembly";
    title.style.fontSize = "16pt";
    title.style.fontWeight = "bold";
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createElement("br"));
    
    // Calculate master mix volumes
    var mmix = document.getElementById("master_mix");
    var text = document.createTextNode("Master Mix:");
    mmix.style.fontStyle = "italic";
    mmix.appendChild(text);
    // Find number of samples
    var table = document.getElementById("samples");
    var reactions = 0;
    for (var i = 0; i < table.rows.length - 1; i++) {
        var row = document.getElementById("label_" + (i + 1));
        if (row.value != "") {
            reactions++;
        }
    }
    var table = document.getElementById("mmix_volumes");
    // ddH2O
    var h2o = table.insertRow(table.rows.length);
    var vol_h20 = h2o.insertCell(0);
    vol_h20.innerHTML = (reactions + 0.5) * 6 + " uL";
    var reagent_h2o = h2o.insertCell(1);
    reagent_h2o.innerHTML = "ddH2O";
    // ligase buffer
    var ligase = table.insertRow(table.rows.length);
    var vol_ligase = ligase.insertCell(0);
    vol_ligase.innerHTML = (reactions + 0.5) + " uL";
    var reagent_ligase = ligase.insertCell(1);
    reagent_ligase.innerHTML = "Ligase Buffer";
    // restriction enzyme
    var r_enzyme = table.insertRow(table.rows.length);
    var vol_enzyme = r_enzyme.insertCell(0);
    vol_enzyme.innerHTML = (reactions + 0.5) * 0.5 + " uL";
    var reagent_enzyme = r_enzyme.insertCell(1);
    reagent_enzyme.innerHTML = document.getElementById("r_enzyme").value;
    // frag2
    var frag = table.insertRow(table.rows.length);
    var vol_frag = frag.insertCell(0);
    vol_frag.innerHTML = (reactions + 0.5) + " uL";
    var reagent_frag = frag.insertCell(1);
    reagent_frag.innerHTML = "frag2";
    table.appendChild(document.createElement("br"));
    
    // reaction volumes
    var mmix = document.getElementById("reaction");
    var text = document.createTextNode("Reaction:");
    mmix.style.fontStyle = "italic";
    mmix.appendChild(text);
    var table = document.getElementById("reaction_volumes");
    // master mix
    var master = table.insertRow(table.rows.length);
    var vol_master = master.insertCell(0);
    vol_master.innerHTML = 8.5 + " uL";
    var reagent_master = master.insertCell(1);
    reagent_master.innerHTML = "Master Mix";
    // frag1
    var frag1 = table.insertRow(table.rows.length);
    var vol_frag1 = frag1.insertCell(0);
    vol_frag1.innerHTML = 1 + " uL";
    var reagent_frag1 = frag1.insertCell(1);
    reagent_frag1.innerHTML = "frag1";
    // T4 DNA ligase
    var t4 = table.insertRow(table.rows.length);
    var vol_t4 = t4.insertCell(0);
    vol_t4.innerHTML = 0.5 + " uL";
    var reagent_t4 = t4.insertCell(1);
    reagent_t4.innerHTML = "T4 DNA ligase";
    table.appendChild(document.createElement("br"));
    
    // source
    var title = document.getElementById("source_title");
    var text = document.createTextNode("source:");
    title.style.fontWeight = "bold";
    title.appendChild(text);
    var source = document.getElementById("sheet_source");
    var header = document.createElement("tr");
    source.appendChild(header);
    var dna = document.createElement("th");
    dna.innerHTML = "dna &nbsp &nbsp &nbsp &nbsp &nbsp";
    var location = document.createElement("th");
    location.innerHTML = "location &nbsp &nbsp &nbsp &nbsp &nbsp";
    header.appendChild(dna);
    header.appendChild(location);
    
    for (var i = 0; i < source_rows; i++) {
        var row = source.insertRow(source.rows.length);

        var dna = row.insertCell(0);
        dna.innerHTML = document.getElementById("dna_" + (i + 1)).value;
        
        var location = row.insertCell(1);
        location.innerHTML = document.getElementById("src_loc_" + (i + 1)).value;
    }
    source.appendChild(document.createElement("br"));
    
    // samples
    var title = document.getElementById("sample_title");
    var text = document.createTextNode("samples:");
    title.style.fontWeight = "bold";
    title.appendChild(text);
    var samples = document.getElementById("sheet_samples");
    var header = document.createElement("tr");
    samples.appendChild(header);
    var label = document.createElement("th");
    label.innerHTML = "label &nbsp &nbsp &nbsp &nbsp &nbsp";
    var frag1 = document.createElement("th");
    frag1.innerHTML = "frag1 &nbsp &nbsp &nbsp &nbsp &nbsp";
    var frag2 = document.createElement("th");
    frag2.innerHTML = "frag2 &nbsp &nbsp &nbsp &nbsp &nbsp";
    var product = document.createElement("th");
    product.innerHTML = "product &nbsp &nbsp &nbsp &nbsp &nbsp";
    header.appendChild(label);
    header.appendChild(frag1);
    header.appendChild(frag2);
    header.appendChild(product);
    
    for (var i = 0; i < sample_rows; i++) {
        var row = samples.insertRow(samples.rows.length);

        var label = row.insertCell(0);
        label.innerHTML = document.getElementById("label_" + (i + 1)).value;
        
        var frag1 = row.insertCell(1);
        frag1.innerHTML = document.getElementById("frag1_" + (i + 1)).value;
        
        var frag2 = row.insertCell(2);
        frag2.innerHTML = document.getElementById("frag2_" + (i + 1)).value;
        
        var product = row.insertCell(3);
        product.innerHTML = document.getElementById("product_" + (i + 1)).value;
    }
    samples.appendChild(document.createElement("br"));
}
