/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import { connect } from 'react-redux';

import { getTaskDetail as getTaskDetailAction } from '../../redux/actions'

function TaskDetailPage(props) {
  console.log("TaskDetailPage -> props", props)
  const { match, getTaskDetail, taskDetail } = props;
  const index = match.params.index;

  useEffect(() => {
    getTaskDetail({ index: index });
  }, []);

  return (
    <div style={{ width: 500, margin: '16px auto 0' }}>
      <Card size="small">
        <Row>
          <Col span={8}>Title:</Col>
          <Col span={16}>{taskDetail.title}</Col>
          <Col span={8}>Description:</Col>
          <Col span={16}>{taskDetail.description}</Col>
        </Row>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { taskDetail } = state.toDoListReducer;
  return {
    taskDetail: taskDetail,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTaskDetail: (params) => dispatch(getTaskDetailAction(params)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailPage);
