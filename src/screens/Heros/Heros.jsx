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
                    How to evaluate the ability of large language models (LLM) is an open question after ChatGPT-like
                    LLMs prevailing the community. Existing evaluation methods suffer from following shortcomings:
                  </p>
                  <p className="p">
                    limited evaluated abilities;
                    <br />
                    hackable benchmarks;
                    <br />
                    unobjective metrics.
                  </p>
                  <p className="paragraph-2">
                    We suggest that task-based evaluation, where LLM agents complete tasks in a simulated environment,
                    is a one-for-all solution to solve above problems.
                  </p>
                  <p className="paragraph-2">
                    Researchers can build their evaluation tasks by adding agents and buildings on an interactive GUI or
                    deploy and test new support mechanisms, i.e. memory system and planning system,&nbsp;&nbsp;by a few
                    lines of codes.
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
          <img
            className="line"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-86.svg"
          />
        </div>
      </div>
    </div>
  );
};
