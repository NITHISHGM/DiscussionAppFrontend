import React from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Avatar, List } from "antd";
import { isEmpty } from "lodash";

const DiscussionDetails = () => {
  const { data, status } = useSelector((state) => state.getSingleDiscussion);
  const { SingleIDCommentStatus, SingleIDCommentData } = useSelector(
    (state) => state.getCommentsForSpecificId
  );

  return (
    <>
      {!status && !isEmpty(data) ? (
        <>
          <Card className="singleDiscussionCard">
            <Row>
              <Col span={24}>
                <div>
                  <div>
                    <span className="discussion-card-title">{data.title}</span>
                    <div>
                      <span className="disussion-card-author-title">
                        {" "}
                        {data.createrName} started at {data.createdAt}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                {" "}
                <div className="discussion-card-content">{data.content}</div>
              </Col>
            </Row>
          </Card>
          <Row>
            <Col span={16}>
              {!SingleIDCommentStatus ? (
                <>
                  <div className="heading">Discussions</div>
                  <List
                    className="singleDiscussionList"
                    size="large"
                    itemLayout="horizontal"
                    dataSource={SingleIDCommentData}
                    renderItem={(item, index) => (
                      <List.Item className="p-4">
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              size="large"
                              style={{ background: "black" }}
                            >
                              {item.commenterName
                                .substring(0, 2)
                                .toLocaleUpperCase()}
                            </Avatar>
                          }
                          title={
                            <span className="cursor-pointer">{item.title}</span>
                          }
                          description={
                            <div>
                              <div>
                                <span className="desc-title">
                                  {item.commenterName}
                                </span>

                                <span className="desc-cmnt">
                                  Commented on &nbsp;
                                  {item.createdAt}
                                </span>
                              </div>
                              <div className="desc-content">{item.content}</div>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </>
              ) : (
                <>Loading....</>
              )}
            </Col>
            <Col span={8}></Col>
          </Row>
        </>
      ) : (
        <>Loading ... </>
      )}
    </>
  );
};

export default DiscussionDetails;
