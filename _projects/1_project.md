---
layout: page
title: Image Captioning
description: A Pre-LLM era image captioning model finetuning project!
img: assets/img/imcap/imcap.png
importance: 1
category: ML
related_publications: false
---

This project used earlier Deep Learning models (a combination of pre-trained CNN and LSTM units layered in different ways) and the Keras, Numpy and Matplotlib libraries, to generate captions from images. I know! Seems easy in the generative AI era. However, back then it inspired me to learn more about Machine Learning and formed the basis of my knowledge in finetuning models, word embeddings, handling multi-modal data, creating layered neural networks and more.

Here are some examples that I generated using google colab ( due to limited compute ) and a whole lot of time. Trainings used to take hours.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/imcap/imcap.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/imcap/ex1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


For those into these sorts of things, here is the system flow. We used the FlickR dataset, and luckily it was small enough for me to get some results and manage finetuning without a personal GPU.
<br/>

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/imcap/process.jpg" title="pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


Please find all the details in the <a href="https://github.com/gritsiem/imagecap">git repo</a>. 