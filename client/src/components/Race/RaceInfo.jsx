import React from 'react'
import { RaceItemLi } from './styled'

export default function RaceInfo(props) {
    return Array.from(props.race.sessions)
        .map(session => {
            return (
                <RaceItemLi
                    className={`${
                        props.sessionId === session.id ? "selected" : ""
                      }`}
                    key={session.id}
                    onClick={() => props.selectSession(session.id)}
                >{session.session_name}
                </RaceItemLi >
            )
        })
}
