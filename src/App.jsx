import { useState } from 'react'
import { CreateTagSheet } from './components/CreateTagSheet'
import { CreateTaskSheet } from './components/CreateTaskSheet'
import { CreateTopicSheet } from './components/CreateTopicSheet'
import { FeedbackToast } from './components/FeedbackToast'
import { Layout } from './components/Layout'
import { UserSelector } from './components/UserSelector'
import { useTags } from './hooks/useTags'
import { useTasks } from './hooks/useTasks'
import { useTopics } from './hooks/useTopics'
import { useUser } from './hooks/useUser'
import { Tasks } from './pages/Tasks'
import { Topics } from './pages/Topics'

function App() {
  const [tab, setTab] = useState('topics')
  const [topicSheetOpen, setTopicSheetOpen] = useState(false)
  const [taskSheetOpen, setTaskSheetOpen] = useState(false)
  const [tagSheetOpen, setTagSheetOpen] = useState(false)

  const { user, selectUser } = useUser()
  const { tags, addTag } = useTags()
  const { topics, createTopic, markDone: doneTopic, createFollowUp: followTopic, toggleUrgent: urgentTopic } = useTopics()
  const { tasks, createTask, markDone: doneTask, createFollowUp: followTask, toggleUrgent: urgentTask, toast } = useTasks()

  if (!user) {
    return <UserSelector onSelect={selectUser} />
  }

  return (
    <>
      <Layout
        tab={tab}
        setTab={setTab}
        onFab={() => {
          if (tab === 'topics') setTopicSheetOpen(true)
          else setTaskSheetOpen(true)
        }}
      >
        {tab === 'topics' ? (
          <Topics topics={topics} onDone={doneTopic} onFollowUp={followTopic} onToggleUrgent={urgentTopic} />
        ) : (
          <Tasks tasks={tasks} onDone={doneTask} onFollowUp={followTask} onToggleUrgent={urgentTask} />
        )}
      </Layout>

      <CreateTopicSheet
        open={topicSheetOpen}
        onClose={() => setTopicSheetOpen(false)}
        tags={tags}
        currentUser={user}
        onCreate={createTopic}
        onCreateTag={() => setTagSheetOpen(true)}
      />
      <CreateTaskSheet
        open={taskSheetOpen}
        onClose={() => setTaskSheetOpen(false)}
        tags={tags}
        currentUser={user}
        onCreate={createTask}
        onCreateTag={() => setTagSheetOpen(true)}
      />
      <CreateTagSheet open={tagSheetOpen} onClose={() => setTagSheetOpen(false)} onCreate={addTag} />
      <FeedbackToast message={toast} />
    </>
  )
}

export default App
