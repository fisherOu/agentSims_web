import React from "react";
import { MasterPrimary } from "../../components/MasterPrimary";
import { MasterSecondary } from "../../components/MasterSecondary";
import "./style.css";

export const Heros = () => {
  return (
    <div className="heros">
      <div className="heros-v">
        <div className="overlap-group">
          <div className="wrapper">
            <div className="frame">
              <div className="div">
                <h1 className="heading">AgentSims: An Open-Source Sandbox for Large Language Model Evaluation</h1>
                <h3 className="sub-title">Jiaju Lin<sup className="sup">1,2</sup>,Haoran Zhao<sup className="sup">1,3 *</sup>,Aochi Zhang<sup className="sup">1</sup>,Yiting Wu<sup className="sup">1,4</sup>,Huqiuyue Ping<sup className="sup">1,5</sup>,Qin Chen<sup className="sup">6</sup></h3>
                <p className="sub-title-info"><sup className="sup">1</sup>PTA studio</p>
                <p className="sub-title-info"><sup className="sup">2</sup>Pennsylvania State University,<sup className="sup">3</sup>Beihang University,</p>
                <p className="sub-title-info"><sup className="sup">4</sup>Sun Yat-sen University<sup className="sup">5</sup>Zhejiang University<sup className="sup">6</sup>East China Normal University</p>
                <p className="sub-title-info"><sup className="sup">*</sup>corresponding author: zhaohaoran@buaa.edu.cn</p>
                <p className="sub-title-info"><sup className="sup">2</sup>jjlin.unfake@gmail.com and <sup className="sup">6</sup>qchen@cs.ecnu.edu.cn</p>
                <div className="button-set">
                  <MasterPrimary
                    buttonTextClassName="master-primary-instance"
                    className="master-primary-button"
                    iconLeft={false}
                    iconRight={false}
                    size="default"
                    text="PAPER"
                    type="primary"
                    onClick={() => window.open('http://yourlink.com')}
                  />
                  <a href="https://github.com/py499372727/AgentSims/">
                  <MasterSecondary
                    buttonTextClassName="master-secondary-instance"
                    className="master-secondary-button"
                    iconLeft={false}
                    iconRight={false}
                    size="default"
                    text="CODE"
                    type="primary"
                    onClick={() => window.open('https://github.com/fisherOu/llm_scene')}
                  />
                  </a>
                  <a href="https://youtu.be/buZX6XJiZtE">
                  <MasterSecondary
                    buttonTextClassName="master-secondary-instance"
                    className="master-secondary-button"
                    iconLeft={false}
                    iconRight={false}
                    size="default"
                    text="DEMO VIDEO"
                    type="primary"
                    onClick={() => window.open('http://yourlink.com')}
                  />
                  </a>
                  <MasterSecondary
                    buttonTextClassName="master-secondary-instance"
                    className="master-secondary-button"
                    iconLeft={false}
                    iconRight={false}
                    size="default"
                    text="LIVE DEMO"
                    type="primary"
                    onClick={() => window.open('http://yourlink.com')}
                  />
                  <MasterSecondary
                    buttonTextClassName="master-secondary-instance"
                    className="master-secondary-button"
                    iconLeft={false}
                    iconRight={false}
                    size="default"
                    text="DOCS"
                    type="primary"
                    onClick={() => window.open('http://yourlink.com')}
                  />
                </div>
              </div>
              <div className="frame-2">
                <div className="frame-3">
                  <p className="paragraph">
                  How to evaluate the ability of large language models (LLM) is an open question after ChatGPT-like LLMs prevailing the community. Existing evaluation methods suffer from following shortcomings:
                  </p>
                  <p className="p">
                    (1) constrained evaluation abilities,
                    <br />
                    (2) vulnerable benchmarks,
                    <br />
                    (3) unobjective metrics.
                  </p>
                  <p className="paragraph-2">
                    We suggest that task-based evaluation, where LLM agents complete tasks in a simulated environment, is a one-for-all solution to solve above problems.
                  </p>
                  <p className="paragraph-2">
                    We present AgentSims, an easy-to-use infrastructure for researchers from all disciplines to test the specific capacities they are interested in.
                  </p>
                  <p className="paragraph-2">
                    Researchers can build their evaluation tasks by adding agents and buildings on an interactive GUI or deploy and test new support mechanisms, i.e. memory system and planning system,&nbsp;&nbsp;by a few lines of codes.  
                  </p>
                </div>
                <div className="frame-3">
                  <p className="paragraph">
                  We present a demonstration of our system on this website.
                  </p>
                  <p className="p">
                  PAPER contains our arXiv paper publication.
                    <br />
                    CODE links to our GitHub code repository.
                    <br />
                    DEMO VIDEO showcases demonstration videos.
                    <br />
                    LIVE DEMO is our online web client.
                    <br />
                    DOCS provides detailed documentation of our system. 
                  </p>
                  <p className="paragraph-2">
                  You can use our LIVE DEMO to experience a simple trial of our system. The usage flow is: create AGENTS and BUILDINGS after entering the website, then use the tick button to activate the no-mayor mode, and the mayor button to activate the mayor mode. We provide access to the GPT-3.5 API in the live demo for testing. 
                  </p>
                  <p className="paragraph-2">
                  Due to billing limits, we have set connection limits per user, which will automatically end the session when reached. We will keep the LIVE DEMO server open, but due to capacity, it currently only supports one active web client at a time and we regularly clear server cache.
                  </p>
                  <p className="paragraph-2">
                  For the best experience, we strongly recommend local deployment following the instructions in CODE and further development based on PAPER and DOCS.
                  </p>
                </div>
                <img
                  className="image"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/image-1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
