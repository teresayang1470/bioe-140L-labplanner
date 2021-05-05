# Web Version of LabPlanner

The goal of this project was to create a graphical interface that facilitates the authoring of LabSheets. To do this, I used HTML, CSS, and Javascript to create a website which has five different pages, each of which guides the user through creating a specific type of LabSheet (PCR, Gel, Zymo, Assembly, or Transform). Each page has a series of labeled text boxes which allow the user to input relevant information; at the end, there is a "Generate Labsheet" button which outputs the entered information in the standard LabSheet format. This generated output can them be copied and pasted into Word.

## PCR

<img src="docs/images/pcr_top.png">

Users can navigate between different pages using the navigation bar at the top, and they can identify which page they are on by the label in the top left hand corner.

For the PCR step, users are asked to input their experiment name as well as the name of the parts that correspond to this particular LabSheet. This will show up in the final generated LabSheet as "Experiment Name/Part Name." For example, for the experiment APAP3 and the LabSheet for running PCR on the backbone, we would enter "APAP3" under Experiment Name and "back" under Name of Parts, which results in the heading "APAP3/back."

Users can also pick a polymerase protocl and corresponding thermocycler program. The default is PrimeStar, although this text can be changed. There is a dropdown of programs to choose from, and a chart right below it to help users identify which program is most appropriate for their experiment.

<img src="docs/images/pcr_program.png" width="300">

Below the protocol and program selection we have our source information. Each text box can be filled in with the relevant information, and users can press the black "+" button to add additional rows as needed.

<img src="docs/images/pcr_input.png">

Additionally, any text with a dotted black underline has an accompanying tool tip. That is, if the user hovers over the text, they will see additional details that can help them figure out what information should go in the blanks.

<img src="docs/images/tooltips.png">

 A completed input might look something like this (this screenshot is zoomed out to see the entire screen):

<img src="docs/images/pcr_filled.png" width="500">

Once the user hits the "Generate Labsheet" button, something like this will generate at the bottom of the page:

<img src="docs/images/pcr_generated.png" width="500">

This text can directly be copied and pasted into Word, although there are some formatting issues that are a work in progress:

<img src="docs/images/pcr_word.png" width="500">

