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
    var label = row.insertCell(1);
    t2.id = "label_" + sample_rows;
    label.appendChild(t2);
    
    var t3 = document.createElement("input");
    var side_label = row.insertCell(2);
    t3.id = "side_label_" + sample_rows;
    side_label.appendChild(t3);
    
    var t4 = document.createElement("input");
    var elution_vol = row.insertCell(3);
    t4.id = "elution_vol_" + sample_rows;
    t4.value = "uL";
    elution_vol.appendChild(t4);
    
    var t5 = document.createElement("input");
    var dest = row.insertCell(4);
    t5.id = "destination_" + sample_rows;
    dest.appendChild(t5);
}

function generate_sheet() {
    // heading
    var title = document.getElementById("expt_title");
    title.innerHTML = document.getElementById("expt_name").value + "/" + document.getElementById("part_name").value + ": Zymo";
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
    var label = document.createElement("th");
    label.innerHTML = "label &nbsp &nbsp &nbsp &nbsp &nbsp";
    var side_label = document.createElement("th");
    side_label.innerHTML = "side_label &nbsp &nbsp &nbsp &nbsp &nbsp";
    var elution_vol = document.createElement("th");
    elution_vol.innerHTML = "elution_volume &nbsp &nbsp &nbsp &nbsp &nbsp";
    var dest = document.createElement("th");
    dest.innerHTML = "destination &nbsp &nbsp &nbsp &nbsp &nbsp";
    header.appendChild(rxn);
    header.appendChild(label);
    header.appendChild(side_label);
    header.appendChild(elution_vol);
    header.appendChild(dest);

    
    for (var i = 0; i < sample_rows; i++) {
        var row = samples.insertRow(samples.rows.length);

        var rxn = row.insertCell(0);
        rxn.innerHTML = document.getElementById("rxn_" + (i + 1)).value;
        
        var label = row.insertCell(1);
        label.innerHTML = document.getElementById("label_" + (i + 1)).value;
        
        var side_label = row.insertCell(2);
        side_label.innerHTML = document.getElementById("side_label_" + (i + 1)).value;
        
        var elution_vol = row.insertCell(3);
        elution_vol.innerHTML = document.getElementById("elution_vol_" + (i + 1)).value;
        
        var dest = row.insertCell(4);
        dest.innerHTML = document.getElementById("destination_" + (i + 1)).value;
    }
    samples.appendChild(document.createElement("br"));
}
