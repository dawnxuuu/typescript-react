import * as React from 'react'

export interface IProps {
  name: string;
  level?: number;
}

class Hello extends React.Component<IProps, object> {
  public render () {
    const {name, level = 1} = this.props

    if (level <= 0) {
      throw new Error('level 必须大于0')
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + level}
        </div>
      </div>
    )
  }
}

export default Hello